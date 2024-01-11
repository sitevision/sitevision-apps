/**
 * Mocking interface for requester
 * Bit of a hack, since it's really returns an $.ajax object.
 * But $.ajax wraps a promise.
 */
export default {
  doGet: () => {
    return new Promise((resolve) => {
      resolve();
    });
  },
  doPost: () => {
    return new Promise((resolve) => {
      resolve();
    });
  },
  doPut: () => {
    return new Promise((resolve) => {
      resolve();
    });
  },
  doDelete: () => {
    return new Promise((resolve) => {
      resolve();
    });
  },
};
