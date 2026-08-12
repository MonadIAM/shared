import {
    ReauthenticationTopicAction,
    ServiceClientTopicAction,
    NotificationContentKind,
    NotificationTopicAction,
    AccessCacheTopicAction,
    MembershipTopicAction,
    NotificationCategory,
    BlacklistTopicAction,
    AccountTopicAction,
    InvalidationScope,
    RealmTopicAction,
    MessageTemplate,
    PlatformService,
} from "./enums";

declare global {
    namespace Topics {
        namespace AccessCache {
            type Message = {
                actionType: AccessCacheTopicAction;
                payload: {
                    items: Item[];
                };
            };

            type Item = AccountRealmItem | RealmItem | AccountItem | GlobalItem;

            type AccountRealmItem = {
                scope: InvalidationScope.ACCOUNT_REALM;
                account: string;
                realm: string;
            };

            type RealmItem = {
                scope: InvalidationScope.REALM;
                realm: string;
            };

            type AccountItem = {
                scope: InvalidationScope.ACCOUNT;
                account: string;
            };

            type GlobalItem = {
                scope: InvalidationScope.GLOBAL;
            };
        }

        namespace Membership {
            type Message =
                | LeaveRequestedMessage
                | LeaveConfirmedMessage
                | LeaveRejectedMessage
                | JoinRequestedMessage
                | JoinConfirmedMessage
                | JoinRejectedMessage;

            type JoinRequestedMessage = {
                actionType: MembershipTopicAction.JOIN_REQUESTED;
                payload: {
                    invitedBy: string;
                    process: string;
                    command: string;
                    account: string;
                    invite: string;
                    realm: string;
                    role: string;
                };
            };

            type JoinConfirmedMessage = {
                actionType: MembershipTopicAction.JOIN_CONFIRMED;
                payload: {
                    assignment: string;
                    invitedBy: string;
                    joinedAt: number;
                    process: string;
                    command: string;
                    account: string;
                    invite: string;
                    realm: string;
                    role: string;
                };
            };

            type JoinRejectedMessage = {
                actionType: MembershipTopicAction.JOIN_REJECTED;
                payload: {
                    process: string;
                    command: string;
                    invite: string;
                    reason: string;
                };
            };

            type LeaveRequestedMessage = {
                actionType: MembershipTopicAction.LEAVE_REQUESTED;
                payload: {
                    requestedBy: string;
                    process: string;
                    command: string;
                    account: string;
                    reason?: string;
                    realm: string;
                };
            };

            type LeaveConfirmedMessage = {
                actionType: MembershipTopicAction.LEAVE_CONFIRMED;
                payload: {
                    requestedBy: string;
                    process: string;
                    command: string;
                    account: string;
                    leftAt: number;
                    realm: string;
                };
            };

            type LeaveRejectedMessage = {
                actionType: MembershipTopicAction.LEAVE_REJECTED;
                payload: {
                    process: string;
                    command: string;
                    account: string;
                    reason: string;
                    realm: string;
                };
            };
        }

        namespace Realm {
            type Message = {
                actionType: RealmTopicAction;
                payload: {
                    realm: string;
                    version: number;
                };
            };
        }

        namespace Account {
            type Message = {
                actionType: AccountTopicAction;
                payload: {
                    account: string;
                };
            };
        }

        namespace Notification {
            type CreateMessage = {
                actionType: NotificationTopicAction.CREATE;
                payload: ContentPayload | TemplatePayload;
            };

            type CancelMessage = {
                actionType: NotificationTopicAction.CANCEL;
                payload: CancelPayload;
            };

            type Message = CreateMessage | CancelMessage;

            type BasePayload = {
                recipient: string;
                category: NotificationCategory;
                sourceService: PlatformService;
                dedupKey?: string;
                realm?: string;
            };

            type ContentPayload = BasePayload & {
                kind: NotificationContentKind.CONTENT;
                title: string;
                text: string;
            };

            type TemplatePayload = BasePayload & {
                kind: NotificationContentKind.TEMPLATE;
                params?: Record<string, string>;
                template: MessageTemplate;
                language: string;
            };

            type CancelPayload = {
                dedupKey: string;
                override: ContentPayload | TemplatePayload;
            };
        }

        namespace Blacklist {
            type Message = {
                actionType: BlacklistTopicAction;
                payload: {
                    expiresAt: number;
                    session: string;
                };
            };
        }

        namespace Reauthentication {
            type Message = {
                actionType: ReauthenticationTopicAction;
                payload: {
                    expiresAt: number;
                    session: string;
                };
            };
        }

        namespace ServiceClient {
            type Message = {
                actionType: ServiceClientTopicAction;
                payload: {
                    application: string;
                    code: string;
                    id: string;
                };
            };
        }
    }

    namespace Consumers {
        namespace DLQ {
            type Message = {
                originalTopic: string;
                payload: unknown;
                error: string;
            };
        }
    }
}
