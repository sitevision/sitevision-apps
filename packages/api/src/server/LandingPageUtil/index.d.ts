import Node from '../../builtins/Node';

export function getCollaborationGroupsPage(): Node;
export function getContactsPage(): Node;
export function getErrorPage(): Node;
export function getFilesPage(): Node;
export function getLoginPage(): Node;
export function getMembersPage(): Node;
export function getProfilePage(): Node;
export function getTagTimelinePage(): Node;
export function getTimelineEntryPage(): Node;
export function getTopicTimelinePage(): Node;
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
