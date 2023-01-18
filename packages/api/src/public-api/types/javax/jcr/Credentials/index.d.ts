/**
 * Interface for all credentials that may be passed to the {@link
 * Repository#login(Credentials credentials, String workspaceName)} method.
 * Serves as a marker interface that all repositories must implement when
 * providing a credentials class. See {@link SimpleCredentials} and {@link
 * GuestCredentials} for examples of such a class.
  
    */
type Credentials = {
  undefined;
};

export = Credentials;
