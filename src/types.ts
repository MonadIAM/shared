import {
    ReauthenticationTopicAction,
    InterfaceClientTopicAction,
    ServiceClientTopicAction,
    NotificationContentKind,
    NotificationTopicAction,
    AccessCacheTopicAction,
    PositionReferenceType,
    MessageDispatchAction,
    NotificationCategory,
    BlacklistTopicAction,
    PositionTopicAction,
    AccountTopicAction,
    InvalidationScope,
    ProjectionScript,
    RealmTopicAction,
    MessageTemplate,
    PlatformService,
    PrivilegeScope,
    RealmType,
} from "./enums";

declare global {
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

        namespace Position {
            type Message =
                | PlacementRequestedMessage
                | PlacementConfirmedMessage
                | PlacementRejectedMessage
                | ReferenceRequestedMessage
                | ReferenceConfirmedMessage
                | ReferenceRejectedMessage
                | LifecycleMessage
                | DepartmentPurgedMessage
                | TeamPurgedMessage;

            type PlacementRequestedMessage = {
                actionType: PositionTopicAction.PLACEMENT_REQUESTED;
                payload: {
                    actor: string;
                    realm: string;
                    input: {
                        process: string;
                        organization: string;
                        position: string;
                        department: string;
                        team: string;
                    };
                };
            };

            type PlacementConfirmedMessage = {
                actionType: PositionTopicAction.PLACEMENT_CONFIRMED;
                payload: {
                    actor: string;
                    realm: string;
                    input: {
                        process: string;
                        organization: string;
                        position: string;
                        department: string;
                        team: string;
                    };
                };
            };

            type PlacementRejectedMessage = {
                actionType: PositionTopicAction.PLACEMENT_REJECTED;
                payload: {
                    actor: string;
                    realm: string;
                    input: {
                        process: string;
                        organization: string;
                        position: string;
                        department: string;
                        team: string;
                        reason: string;
                    };
                };
            };

            type ReferenceRequestedMessage = {
                actionType: PositionTopicAction.REFERENCE_REQUESTED;
                payload: {
                    actor: string;
                    realm: string;
                    input:
                        | {
                              process: string;
                              organization: string;
                              position: string;
                              department: string;
                              type: PositionReferenceType.DEPARTMENT_MANAGER;
                          }
                        | {
                              process: string;
                              organization: string;
                              position: string;
                              department: string;
                              team: string;
                              type: PositionReferenceType.TEAM_LEAD;
                          };
                };
            };

            type ReferenceConfirmedMessage = {
                actionType: PositionTopicAction.REFERENCE_CONFIRMED;
                payload: {
                    actor: string;
                    realm: string;
                    input:
                        | {
                              process: string;
                              organization: string;
                              position: string;
                              department: string;
                              type: PositionReferenceType.DEPARTMENT_MANAGER;
                          }
                        | {
                              process: string;
                              organization: string;
                              position: string;
                              department: string;
                              team: string;
                              type: PositionReferenceType.TEAM_LEAD;
                          };
                };
            };

            type ReferenceRejectedMessage = {
                actionType: PositionTopicAction.REFERENCE_REJECTED;
                payload: {
                    actor: string;
                    realm: string;
                    input:
                        | {
                              process: string;
                              organization: string;
                              position: string;
                              department: string;
                              type: PositionReferenceType.DEPARTMENT_MANAGER;
                              reason: string;
                          }
                        | {
                              process: string;
                              organization: string;
                              position: string;
                              department: string;
                              team: string;
                              type: PositionReferenceType.TEAM_LEAD;
                              reason: string;
                          };
                };
            };

            type LifecycleMessage = {
                actionType: PositionTopicAction.ARCHIVED | PositionTopicAction.PURGED;
                payload: {
                    actor: string;
                    realm: string;
                    input: {
                        organization: string;
                        positions: string[];
                    };
                };
            };

            type DepartmentPurgedMessage = {
                actionType: PositionTopicAction.DEPARTMENT_PURGED;
                payload: {
                    actor: string;
                    realm: string;
                    input: {
                        organization: string;
                        department: string;
                    };
                };
            };

            type TeamPurgedMessage = {
                actionType: PositionTopicAction.TEAM_PURGED;
                payload: {
                    actor: string;
                    realm: string;
                    input: {
                        organization: string;
                        team: string;
                    };
                };
            };
        }

        namespace Realm {
            type Message =
                | MembershipJoinRequestedMessage
                | MembershipJoinConfirmedMessage
                | MembershipJoinRejectedMessage
                | BootstrapOrganizationRequestedMessage
                | BootstrapProjectRequestedMessage
                | BootstrapConfirmedMessage
                | BootstrapRejectedMessage
                | TransferOwnershipRequestedMessage
                | TransferOwnershipConfirmedMessage
                | TransferOwnershipRejectedMessage
                | SystemLifecycleMessage
                | AccountAccessMessage
                | LifecycleMessage;

            type MembershipJoinRequestedMessage = {
                actionType: RealmTopicAction.MEMBERSHIP_JOIN_REQUESTED;
                payload: {
                    actor: string;
                    realm: string;
                    input: {
                        process: string;
                        command: string;
                        membership: string;
                        account: string;
                        invite?: string;
                        role?: string;
                    };
                };
            };

            type MembershipJoinConfirmedMessage = {
                actionType: RealmTopicAction.MEMBERSHIP_JOIN_CONFIRMED;
                payload: {
                    actor: string;
                    realm: string;
                    input: {
                        membership: string;
                        assignment: string;
                        joinedAt: number;
                        process: string;
                        command: string;
                        account: string;
                        invite?: string;
                        role: string;
                    };
                };
            };

            type MembershipJoinRejectedMessage = {
                actionType: RealmTopicAction.MEMBERSHIP_JOIN_REJECTED;
                payload: {
                    actor: string;
                    realm: string;
                    input: {
                        membership: string;
                        process: string;
                        command: string;
                        account: string;
                        invite?: string;
                        reason: string;
                    };
                };
            };

            type BootstrapOrganizationRequestedMessage = {
                actionType: RealmTopicAction.BOOTSTRAP_ORGANIZATION_REQUESTED;
                payload: {
                    actor: string;
                    realm: string;
                    input: {
                        description?: string;
                        resource: string;
                        process: string;
                        owner: string;
                        name: string;
                    };
                };
            };

            type BootstrapProjectRequestedMessage = {
                actionType: RealmTopicAction.BOOTSTRAP_PROJECT_REQUESTED;
                payload: {
                    actor: string;
                    realm: string;
                    input: {
                        organizationRealm: string;
                        description?: string;
                        resource: string;
                        process: string;
                        owner: string;
                        name: string;
                    };
                };
            };

            type BootstrapConfirmedMessage = {
                actionType: RealmTopicAction.BOOTSTRAP_CONFIRMED;
                payload: {
                    actor: string;
                    realm: string;
                    input: {
                        type: RealmType.ORGANIZATION | RealmType.PROJECT;
                        resource: string;
                        process: string;
                        service?: PlatformService.ACCESS_CONTROL_SERVICE | PlatformService.HR_SERVICE;
                    };
                };
            };

            type BootstrapRejectedMessage = {
                actionType: RealmTopicAction.BOOTSTRAP_REJECTED;
                payload: {
                    actor: string;
                    realm: string;
                    input: {
                        type: RealmType.ORGANIZATION | RealmType.PROJECT;
                        resource: string;
                        process: string;
                        reason: string;
                    };
                };
            };

            type TransferOwnershipRequestedMessage = {
                actionType: RealmTopicAction.TRANSFER_OWNERSHIP_REQUESTED;
                payload: {
                    actor: string;
                    realm: string;
                    input: {
                        previousOwner: string;
                        organization: string;
                        process: string;
                        owner: string;
                    };
                };
            };

            type TransferOwnershipConfirmedMessage = {
                actionType: RealmTopicAction.TRANSFER_OWNERSHIP_CONFIRMED;
                payload: {
                    actor: string;
                    realm: string;
                    input: {
                        previousOwner: string;
                        organization: string;
                        process: string;
                        owner: string;
                    };
                };
            };

            type TransferOwnershipRejectedMessage = {
                actionType: RealmTopicAction.TRANSFER_OWNERSHIP_REJECTED;
                payload: {
                    actor: string;
                    realm: string;
                    input: {
                        previousOwner: string;
                        organization: string;
                        process: string;
                        reason: string;
                        owner: string;
                    };
                };
            };

            type SystemLifecycleMessage = {
                actionType:
                    RealmTopicAction.SYSTEM_REVOKE | RealmTopicAction.SYSTEM_RESTORE | RealmTopicAction.SYSTEM_PURGE;
                payload: {
                    actor: string;
                    realm: string;
                };
            };

            type AccountAccessMessage = {
                actionType:
                    | RealmTopicAction.ACCOUNT_ACCESS_PURGE
                    | RealmTopicAction.ACCOUNT_ACCESS_REVOKE
                    | RealmTopicAction.ACCOUNT_ACCESS_RESTORE;
                payload: {
                    actor: string;
                    realm: string;
                    input: {
                        account: string;
                    };
                };
            };

            type LifecycleMessage = {
                actionType: RealmTopicAction.RESTORE | RealmTopicAction.REVOKE | RealmTopicAction.PURGE;
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
            type Identifier = {
                id: string;
                type: "email" | "phone";
                value: string;
            };

            type CreateMessage = {
                actionType: AccountTopicAction.CREATE;
                payload: {
                    account: string;
                    identifier: Identifier;
                    otp: string;
                };
            };

            type VerifyMessage = {
                actionType: AccountTopicAction.VERIFY;
                payload: {
                    account: string;
                    identifier?: Identifier;
                };
            };

            type PurgeMessage = {
                actionType: AccountTopicAction.PURGE;
                payload: { account: string };
            };

            type Message = CreateMessage | VerifyMessage | PurgeMessage;
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
                        override: NotificationSpec;
                        dedupKey: string;
                    };
                };
            };

            type Message = CreateMessage | CancelMessage;

            type NotificationSpec = {
                input: ContentInput | TemplateInput;
                actor?: string;
                realm?: string;
            };

            type BaseInput = {
                category: NotificationCategory;
                sourceService: PlatformService;
                recipient: string;
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
                payload: Record<string, unknown> & {
                    realm: string;
                };
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
                        isRevoked: boolean;
                        id: string;
                    };
                };
            };
        }
    }
}
