import Node from '../../builtins/Node';

/**
* Gets the collaboration groups page (lists all accessible collaboration groups) of current site.
* @returns {Node} the collaboration groups page, or null if current site has no such page specified. 
*/
export function getCollaborationGroupsPage(): Node;

/**
* Gets the contacts page (information about the contacts of current/specified user identity) of current site.
* @returns {Node} the contact page, or null if current site has no such page specified. 
*/
export function getContactsPage(): Node;

/**
* Gets the error page (404) of current site.
* @returns {Node} the error page, or null if current site has no such page specified. 
*/
export function getErrorPage(): Node;

/**
* Gets the files page (information about the files of a collaboration group) of current site.
* @returns {Node} the files page, or null if current site has no such page specified. 
*/
export function getFilesPage(): Node;

/**
* Gets the login page (401) of current site.
* @returns {Node} the login page, or null if current site has no such page specified. 
*/
export function getLoginPage(): Node;

/**
* Gets the members page (lists all members of a specified collaboration group) of current site.
* @returns {Node} the members page, or null if current site has no such page specified. 
*/
export function getMembersPage(): Node;

/**
* Gets the profile page (information about current/specified user identity) of current site.
* @returns {Node} the profile page, or null if current site has no such page specified. 
*/
export function getProfilePage(): Node;

/**
* Gets the tag timeline page (displays the timeline for a specified tag) of current site.
* @returns {Node} the tag timeline page, or null if current site has no such page specified. 
*/
export function getTagTimelinePage(): Node;

/**
* Gets the timeline entry page (displays a single timeline entry) of current site.
* @returns {Node} the timeline entry page, or null if current site has no such page specified. 
*/
export function getTimelineEntryPage(): Node;

/**
* Gets the topic timeline page of current site.
* @returns {Node} the topic timeline page, or null if current site has no such page specified. 
*/
export function getTopicTimelinePage(): Node;

/**
* Gets the user identity search result page of current site.
* @returns {Node} the user identity search result page, or null if current site has no such page specified. 
*/
export function getUserIdentitySearchResultPage(): Node;

declare namespace landingPageUtil {
  export {
    getCollaborationGroupsPage,
    getContactsPage,
    getErrorPage,
    getFilesPage,
    getLoginPage,
    getMembersPage,
    getProfilePage,
    getTagTimelinePage,
    getTimelineEntryPage,
    getTopicTimelinePage,
    getUserIdentitySearchResultPage,
  };
}

export default landingPageUtil;

