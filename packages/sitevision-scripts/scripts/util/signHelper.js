import fs from 'fs';
import chalk from 'chalk';

const ERROR_MESSAGES = {
  CERTIFICATE_NOT_FOUND: (certificateLabel = 'default') => {
    return `Certificate "${certificateLabel}" was not found.`;
  },
  ALREADY_SIGNED:
    'The uploaded app is already signed. Build an unsigned app before signing.',
  INVALID_REQUEST: 'Invalid signing request.',
  TEAM_NOT_FOUND: 'Unable to resolve team for current user.',
  SIGNING_FAILED: 'Signing failed due to an internal error.',
  EMPTY_RESPONSE: 'Signing response did not contain a file body.',
  UNEXPECTED_JSON_RESPONSE:
    'Signing endpoint returned JSON instead of a signed zip file.',
};

const getMessageByCode = (code, certificateName) => {
  const message = ERROR_MESSAGES[code];
  if (!message) {
    return '';
  }

  if (typeof message === 'function') {
    return message(certificateName);
  }

  return message;
};

export const getSigningErrorCodeFromResponse = async (response) => {
  try {
    const payload = await response.json();

    if (payload?.error && typeof payload.error === 'object') {
      return payload.error.code || '';
    }

    if (typeof payload?.code === 'string') {
      return payload.code;
    }
  } catch {
    // Non-JSON responses do not include error codes.
  }

  return '';
};

export const printSigningFailure = ({
  status,
  statusText,
  code,
  certificateName,
}) => {
  if (status === 401) {
    console.log(
      `${chalk.red(
        'Signing failed:'
      )} Unauthorized, check username and password`
    );
    return;
  }

  const message = getMessageByCode(code, certificateName);
  if (message) {
    console.log(`${chalk.red('Signing failed:')} ${message}`);
    return;
  }

  const statusLabel = statusText ? `${status} ${statusText}` : `${status}`;
  console.log(
    `${chalk.red('Signing failed:')} Request failed with status ${statusLabel}.`
  );
};

export const writeSignedZipFromResponse = async ({
  response,
  signedFileNameAndPath,
}) => {
  if (!response.body) {
    throw new Error('Signing response did not contain a file body.');
  }

  await new Promise((resolve, reject) => {
    const writer = fs.createWriteStream(signedFileNameAndPath, {
      autoClose: true,
    });

    response.body.once('error', reject);
    writer.once('error', reject);
    writer.once('finish', resolve);
    response.body.pipe(writer);
  });
};
