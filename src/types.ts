import {
    ReauthenticationTopicAction,
    InterfaceClientTopicAction,
    ServiceClientTopicAction,
    NotificationContentKind,
    NotificationTopicAction,
    AccessCacheTopicAction,
    MessageDispatchAction,
    MembershipTopicAction,
    NotificationCategory,
    BlacklistTopicAction,
    AccountTopicAction,
    InvalidationScope,
    ProjectionScript,
    RealmTopicAction,
    MessageTemplate,
    PlatformService,
    PrivilegeScope,
} from "./enums";

declare global {
    namespace SchemaRegistry {
        type Mode = "publish" | "verify";

        type Scope = "produced" | "consumed" | "all";

        type ArtifactType = "PROTOBUF";

        type Protocol = "kafka" | "grpc";

        type Artifact = {
            readonly producers: readonly string[];
            readonly consumers: readonly string[];
            readonly artifactType: ArtifactType;
            readonly protocol: Protocol;
            readonly protoPath: string;
            readonly artifact: string;
            readonly group: string;
        };
    }

    namespace GRPC {
        namespace AccessControl {
            namespace ListEffectivePrivileges {
                type Request = {
                    account: string;
                    realm: string;
                };

                type Response = {
                    privileges: Record<string, PrivilegeScope>;
                };
            }
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
                    actor: string;
                    realm: string;
                    input: {
                        process: string;
                        command: string;
                        account: string;
                        invite: string;
                        role: string;
                    };
                };
            };

            type JoinConfirmedMessage = {
                actionType: MembershipTopicAction.JOIN_CONFIRMED;
                payload: {
                    actor: string;
                    realm: string;
                    input: {
                        assignment: string;
                        joinedAt: number;
                        process: string;
                        command: string;
                        account: string;
                        invite: string;
                        role: string;
                    };
                };
            };

            type JoinRejectedMessage = {
                actionType: MembershipTopicAction.JOIN_REJECTED;
                payload: {
                    actor: string;
                    realm: string;
                    input: {
                        process: string;
                        command: string;
                        invite: string;
                        reason: string;
                    };
                };
            };

            type LeaveRequestedMessage = {
                actionType: MembershipTopicAction.LEAVE_REQUESTED;
                payload: {
                    actor: string;
                    realm: string;
                    input: {
                        process: string;
                        command: string;
                        account: string;
                        reason?: string;
                    };
                };
            };

            type LeaveConfirmedMessage = {
                actionType: MembershipTopicAction.LEAVE_CONFIRMED;
                payload: {
                    actor: string;
                    realm: string;
                    input: {
                        process: string;
                        command: string;
                        account: string;
                        leftAt: number;
                    };
                };
            };

            type LeaveRejectedMessage = {
                actionType: MembershipTopicAction.LEAVE_REJECTED;
                payload: {
                    actor: string;
                    realm: string;
                    input: {
                        process: string;
                        command: string;
                        account: string;
                        reason: string;
                    };
                };
            };
        }

        namespace Realm {
            type Message = {
                actionType: RealmTopicAction;
                payload: {
                    actor: string;
                    realm: string;
                    input: {
                        version: number;
                    };
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
                payload: NotificationSpec;
            };

            type CancelMessage = {
                actionType: NotificationTopicAction.CANCEL;
                payload: {
                    actor?: string;
                    realm?: string;
                    input: {
                        dedupKey: string;
                        override: NotificationSpec;
                    };
                };
            };

            type Message = CreateMessage | CancelMessage;

            type NotificationSpec = {
                actor?: string;
                realm?: string;
                input: ContentInput | TemplateInput;
            };

            type BaseInput = {
                recipient: string;
                category: NotificationCategory;
                sourceService: PlatformService;
                dedupKey?: string;
            };

            type ContentInput = BaseInput & {
                kind: NotificationContentKind.CONTENT;
                title: string;
                text: string;
            };

            type TemplateInput = BaseInput & {
                kind: NotificationContentKind.TEMPLATE;
                params?: Record<string, string>;
                template: MessageTemplate;
                language: string;
            };
        }

        namespace MessageDispatch {
            type Message = {
                actionType: MessageDispatchAction;
                payload: {
                    message: string;
                };
            };
        }

        namespace ProjectionJournal {
            type Message = {
                actionType: ProjectionScript;
                payload: Record<string, unknown>;
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
                    actor: string;
                    realm: string;
                    input: {
                        application: string;
                        code: string;
                        id: string;
                    };
                };
            };
        }

        namespace InterfaceClient {
            type Message = {
                actionType: InterfaceClientTopicAction;
                payload: {
                    actor: string;
                    realm: string;
                    input: {
                        application: string;
                        isRevoked: boolean;
                        id: string;
                    };
                };
            };
        }
    }
}
