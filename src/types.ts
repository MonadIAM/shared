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
            type Message = GrantMessage | RevokeMessage;

            type GrantMessage = {
                actionType: MembershipTopicAction.GRANT;
                payload: {
                    invitedBy: string;
                    joinedAt: number;
                    account: string;
                    realm: string;
                };
            };

            type RevokeMessage = {
                actionType: MembershipTopicAction.REVOKE;
                payload: {
                    account: string;
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
                params: Record<string, string>;
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
