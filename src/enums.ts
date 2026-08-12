export enum KafkaTopic {
    /* eslint-disable prettier/prettier */
    // account: identity -> all services
    ACCOUNT       = "account",
    ACCOUNT_RETRY = "account-retry",
    ACCOUNT_DEAD  = "account-dead",

    // membership workflow: identity <-> access-control
    MEMBERSHIP       = "membership",
    MEMBERSHIP_RETRY = "membership-retry",
    MEMBERSHIP_DEAD  = "membership-dead",

    // realm: access-control -> identity
    REALM       = "realm",
    REALM_RETRY = "realm-retry",
    REALM_DEAD  = "realm-dead",

    // identifier: identity -> notification
    IDENTIFIER       = "identifier",
    IDENTIFIER_RETRY = "identifier-retry",
    IDENTIFIER_DEAD  = "identifier-dead",

    // service-client: identity -> certificate-service
    SERVICE_CLIENT       = "service-client",
    SERVICE_CLIENT_RETRY = "service-client-retry",
    SERVICE_CLIENT_DEAD  = "service-client-dead",

    // interface-client: identity -> all services
    INTERFACE_CLIENT       = "interface-client",
    INTERFACE_CLIENT_RETRY = "interface-client-retry",
    INTERFACE_CLIENT_DEAD  = "interface-client-dead",

    // access-cache: access-control -> all services
    ACCESS_CACHE       = "access-cache",
    ACCESS_CACHE_RETRY = "access-cache-retry",
    ACCESS_CACHE_DEAD  = "access-cache-dead",

    // notification: all services -> notification
    NOTIFICATION       = "notification",
    NOTIFICATION_RETRY = "notification-retry",
    NOTIFICATION_DEAD  = "notification-dead",

    // message-dispatch: notification internal (SES/SNS dispatch)
    MESSAGE_DISPATCH       = "message-dispatch",
    MESSAGE_DISPATCH_RETRY = "message-dispatch-retry",
    MESSAGE_DISPATCH_DEAD  = "message-dispatch-dead",

    // projection-journal: access-control internal (redis sync)
    PROJECTION_JOURNAL       = "projection-journal",
    PROJECTION_JOURNAL_RETRY = "projection-journal-retry",
    PROJECTION_JOURNAL_DEAD  = "projection-journal-dead",

    // reauthentication: identity -> all services
    REAUTHENTICATION       = "reauthentication",
    REAUTHENTICATION_RETRY = "reauthentication-retry",
    REAUTHENTICATION_DEAD  = "reauthentication-dead",

    // blacklist: session revocation — no retry, dead for failure analysis only
    BLACKLIST      = "blacklist",
    BLACKLIST_DEAD = "blacklist-dead",

    // audit-log-archive / change-log-archive: all services -> ClickHouse, no retry/dead
    AUDIT_LOG_ARCHIVE  = "audit-log-archive",
    CHANGE_LOG_ARCHIVE = "change-log-archive",
    /* eslint-enable prettier/prettier */
}

export enum AccountTopicAction {
    /* eslint-disable prettier/prettier */
    CREATE = "CREATE",
    PURGE  = "PURGE",
    /* eslint-enable prettier/prettier */
}

export enum MembershipTopicAction {
    /* eslint-disable prettier/prettier */
    JOIN_REQUESTED  = "JOIN_REQUESTED",
    JOIN_CONFIRMED  = "JOIN_CONFIRMED",
    JOIN_REJECTED   = "JOIN_REJECTED",
    LEAVE_REQUESTED = "LEAVE_REQUESTED",
    LEAVE_CONFIRMED = "LEAVE_CONFIRMED",
    LEAVE_REJECTED  = "LEAVE_REJECTED",
    /* eslint-enable prettier/prettier */
}

export enum RealmTopicAction {
    /* eslint-disable prettier/prettier */
    REVOKE  = "REVOKE",
    RESTORE = "RESTORE",
    PURGE   = "PURGE",
    /* eslint-enable prettier/prettier */
}

export enum ServiceClientTopicAction {
    /* eslint-disable prettier/prettier */
    CREATE  = "CREATE",
    REVOKE  = "REVOKE",
    RESTORE = "RESTORE",
    PURGE   = "PURGE",
    /* eslint-enable prettier/prettier */
}

export enum InterfaceClientTopicAction {
    /* eslint-disable prettier/prettier */
    CREATE  = "CREATE",
    REVOKE  = "REVOKE",
    RESTORE = "RESTORE",
    PURGE   = "PURGE",
    /* eslint-enable prettier/prettier */
}

export enum IdentifierTopicAction {
    /* eslint-disable prettier/prettier */
    CREATE = "CREATE",
    PURGE  = "PURGE",
    /* eslint-enable prettier/prettier */
}

export enum AccessCacheTopicAction {
    INVALIDATE = "INVALIDATE",
}

export enum InvalidationScope {
    /* eslint-disable prettier/prettier */
    ACCOUNT_REALM = "ACCOUNT_REALM",
    ACCOUNT       = "ACCOUNT",
    GLOBAL        = "GLOBAL",
    REALM         = "REALM",
    /* eslint-enable prettier/prettier */
}

export enum NotificationTopicAction {
    CREATE = "CREATE",
    CANCEL = "CANCEL",
}

export enum NotificationContentKind {
    /* eslint-disable prettier/prettier */
    TEMPLATE = "TEMPLATE",
    CONTENT  = "CONTENT",
    /* eslint-enable prettier/prettier */
}

export enum NotificationCategory {
    /* eslint-disable prettier/prettier */
    SECURITY = "SECURITY",
    INVITES  = "INVITES",
    SYSTEM   = "SYSTEM",
    OTHER    = "OTHER",
    /* eslint-enable prettier/prettier */
}

export enum MessageTemplate {
    /* eslint-disable prettier/prettier */
    // identity: OTP delivery
    IDENTIFIER_VERIFICATION_OTP = "IDENTIFIER_VERIFICATION_OTP",
    ACCOUNT_VERIFICATION_OTP    = "ACCOUNT_VERIFICATION_OTP",
    RESET_PASSWORD_OTP          = "RESET_PASSWORD_OTP",
    LOGIN_OTP                   = "LOGIN_OTP",

    // identity: security alerts
    PASSWORD_CHANGED_VIA_RECOVERY_CODE = "PASSWORD_CHANGED_VIA_RECOVERY_CODE",
    PASSWORD_CHANGED_VIA_OTP           = "PASSWORD_CHANGED_VIA_OTP",
    PASSWORD_CHANGED                   = "PASSWORD_CHANGED",
    SECOND_FACTOR_ENABLED              = "SECOND_FACTOR_ENABLED",
    SECOND_FACTOR_RESET                = "SECOND_FACTOR_RESET",
    RECOVERY_CODES_REGENERATED         = "RECOVERY_CODES_REGENERATED",
    IDENTIFIER_PURGED                  = "IDENTIFIER_PURGED",
    LOGIN_ALERT                        = "LOGIN_ALERT",

    // identity: invites
    INVITE_RECEIVED  = "INVITE_RECEIVED",
    INVITE_CANCELLED = "INVITE_CANCELLED",

    // access-control: assignments/realm
    ASSIGNMENT_GRANTED = "ASSIGNMENT_GRANTED",
    ASSIGNMENT_REVOKED = "ASSIGNMENT_REVOKED",
    REALM_EXCLUDED     = "REALM_EXCLUDED"
    /* eslint-enable prettier/prettier */
}

export enum ReauthenticationTopicAction {
    GRANT = "GRANT",
}

export enum BlacklistTopicAction {
    ADD = "ADD",
}

export enum AuditLogTopicAction {
    ARCHIVE = "ARCHIVE",
}

export enum ChangeLogTopicAction {
    ARCHIVE = "ARCHIVE",
}

export enum PlatformService {
    /* eslint-disable prettier/prettier */
    ACCESS_CONTROL_SERVICE = "access-control-service",
    NOTIFICATION_SERVICE   = "notification-service",
    CERTIFICATE_SERVICE    = "certificate-service",
    IDENTITY_SERVICE       = "identity-service",
    /* eslint-enable prettier/prettier */
}

export enum PermissionCode {
    /* eslint-disable prettier/prettier */
    // ---------------------------------------------------------------------------
    // Common
    // ---------------------------------------------------------------------------

    AUDIT_LOG_READ_ABSOLUTE  = "audit_log.read_absolute",
    CHANGE_LOG_READ_ABSOLUTE = "change_log.read_absolute",

    // ---------------------------------------------------------------------------
    // AccessControl
    // ---------------------------------------------------------------------------
    REALM_READ_PERSONAL = "realm.read_personal",
    REALM_READ_ABSOLUTE = "realm.read_absolute",
    REALM_CREATE        = "realm.create",
    REALM_UPDATE        = "realm.update",
    REALM_REVOKE        = "realm.revoke",
    REALM_RESTORE       = "realm.restore",
    REALM_PURGE         = "realm.purge",
    REALM_EXCLUDE       = "realm.exclude",

    ROLE_READ_COMMON      = "role.read_common",
    ROLE_READ_PERSONAL    = "role.read_personal",
    ROLE_READ_ABSOLUTE    = "role.read_absolute",
    ROLE_CREATE           = "role.create",
    ROLE_UPDATE           = "role.update",
    ROLE_REVOKE           = "role.revoke",
    ROLE_RESTORE          = "role.restore",
    ROLE_PURGE            = "role.purge",
    ROLE_PURGE_SUBTREE    = "role.purge_subtree",
    ROLE_HIERARCHY_UPDATE = "role.hierarchy_update",

    PERMISSION_READ_COMMON   = "permission.read_common",
    PERMISSION_READ_PERSONAL = "permission.read_personal",
    PERMISSION_READ_ABSOLUTE = "permission.read_absolute",
    PERMISSION_CREATE        = "permission.create",
    PERMISSION_UPDATE        = "permission.update",
    PERMISSION_REVOKE        = "permission.revoke",
    PERMISSION_RESTORE       = "permission.restore",
    PERMISSION_PURGE         = "permission.purge",

    ROLE_PERMISSION_ASSIGNMENT_READ_COMMON   = "role_permission_assignment.read_common",
    ROLE_PERMISSION_ASSIGNMENT_READ_ABSOLUTE = "role_permission_assignment.read_absolute",
    ROLE_PERMISSION_ASSIGNMENT_CREATE        = "role_permission_assignment.create",
    ROLE_PERMISSION_ASSIGNMENT_REVOKE        = "role_permission_assignment.revoke",
    ROLE_PERMISSION_ASSIGNMENT_RESTORE       = "role_permission_assignment.restore",
    ROLE_PERMISSION_ASSIGNMENT_PURGE         = "role_permission_assignment.purge",

    ACCOUNT_ROLE_ASSIGNMENT_READ_COMMON   = "account_role_assignment.read_common",
    ACCOUNT_ROLE_ASSIGNMENT_READ_ABSOLUTE = "account_role_assignment.read_absolute",
    ACCOUNT_ROLE_ASSIGNMENT_CREATE        = "account_role_assignment.create",
    ACCOUNT_ROLE_ASSIGNMENT_REVOKE        = "account_role_assignment.revoke",
    ACCOUNT_ROLE_ASSIGNMENT_RESTORE       = "account_role_assignment.restore",
    ACCOUNT_ROLE_ASSIGNMENT_PURGE         = "account_role_assignment.purge",

    PERMISSION_OVERRIDE_READ_PERSONAL = "permission_override.read_personal",
    PERMISSION_OVERRIDE_READ_ABSOLUTE = "permission_override.read_absolute",
    PERMISSION_OVERRIDE_CREATE        = "permission_override.create",
    PERMISSION_OVERRIDE_REVOKE        = "permission_override.revoke",
    PERMISSION_OVERRIDE_RESTORE       = "permission_override.restore",
    PERMISSION_OVERRIDE_PURGE         = "permission_override.purge",

    ROLE_DELEGATION_POLICY_READ_COMMON   = "role_delegation_policy.read_common",
    ROLE_DELEGATION_POLICY_READ_ABSOLUTE = "role_delegation_policy.read_absolute",
    ROLE_DELEGATION_POLICY_CREATE        = "role_delegation_policy.create",
    ROLE_DELEGATION_POLICY_UPDATE        = "role_delegation_policy.update",
    ROLE_DELEGATION_POLICY_REVOKE        = "role_delegation_policy.revoke",
    ROLE_DELEGATION_POLICY_RESTORE       = "role_delegation_policy.restore",
    ROLE_DELEGATION_POLICY_PURGE         = "role_delegation_policy.purge",

    ROLE_CONFLICT_GROUP_READ_ABSOLUTE = "role_conflict_group.read_absolute",
    ROLE_CONFLICT_GROUP_CREATE        = "role_conflict_group.create",
    ROLE_CONFLICT_GROUP_UPDATE        = "role_conflict_group.update",
    ROLE_CONFLICT_GROUP_REVOKE        = "role_conflict_group.revoke",
    ROLE_CONFLICT_GROUP_RESTORE       = "role_conflict_group.restore",
    ROLE_CONFLICT_GROUP_PURGE         = "role_conflict_group.purge",

    ROLE_CONFLICT_MEMBER_READ_ABSOLUTE = "role_conflict_member.read_absolute",
    ROLE_CONFLICT_MEMBER_CREATE        = "role_conflict_member.create",
    ROLE_CONFLICT_MEMBER_PURGE         = "role_conflict_member.purge",

    // ---------------------------------------------------------------------------
    // Identity
    // ---------------------------------------------------------------------------

    INVITE_READ_PERSONAL = "invite.read_personal",
    INVITE_READ_ABSOLUTE = "invite.read_absolute",
    INVITE_CHANGE_STATUS = "invite.change_status",
    INVITE_CREATE        = "invite.create",

    ACCOUNT_READ_PERSONAL = "account.read_personal",
    ACCOUNT_READ_COMMON   = "account.read_common",
    ACCOUNT_READ_ABSOLUTE = "account.read_absolute",
    ACCOUNT_SUSPEND       = "account.suspend",
    ACCOUNT_RESTORE       = "account.restore",

    REAUTHENTICATION_CONFIRM_PASSWORD      = "reauthentication.confirm_password",
    REAUTHENTICATION_CONFIRM_SECOND_FACTOR = "reauthentication.confirm_second_factor",

    IDENTIFIER_READ_PERSONAL         = "identifier.read_personal",
    IDENTIFIER_READ_ABSOLUTE         = "identifier.read_absolute",
    IDENTIFIER_CREATE                = "identifier.create",
    IDENTIFIER_RESEND                = "identifier.resend",
    IDENTIFIER_VERIFY                = "identifier.verify",
    IDENTIFIER_TOGGLE_NOTIFICATIONS  = "identifier.toggle_notifications",
    IDENTIFIER_TOGGLE_PUBLIC_CONTACT = "identifier.toggle_public_contact",
    IDENTIFIER_PURGE                 = "identifier.purge",

    PASSWORD_CHANGE = "password.change",

    PROFILE_UPDATE = "profile.update",

    RECOVERY_CODE_READ_STATUS = "recovery_code.read_status",
    RECOVERY_CODE_REGENERATE  = "recovery_code.regenerate",

    SECOND_FACTOR_READ_PERSONAL = "second_factor.read_personal",
    SECOND_FACTOR_READ_ABSOLUTE = "second_factor.read_absolute",
    SECOND_FACTOR_CREATE        = "second_factor.create",
    SECOND_FACTOR_VERIFY        = "second_factor.verify",
    SECOND_FACTOR_PURGE         = "second_factor.purge",

    SESSION_READ_PERSONAL = "session.read_personal",
    SESSION_READ_ABSOLUTE = "session.read_absolute",
    SESSION_REVOKE        = "session.revoke",
    SESSION_REVOKE_ALL    = "session.revoke_all",

    APPLICATION_READ_ABSOLUTE = "application.read_absolute",
    APPLICATION_CREATE        = "application.create",
    APPLICATION_UPDATE        = "application.update",
    APPLICATION_REVOKE        = "application.revoke",
    APPLICATION_RESTORE       = "application.restore",
    APPLICATION_PURGE         = "application.purge",

    INTERFACE_CLIENT_READ_ABSOLUTE = "interface_client.read_absolute",
    INTERFACE_CLIENT_CREATE        = "interface_client.create",
    INTERFACE_CLIENT_UPDATE        = "interface_client.update",
    INTERFACE_CLIENT_REVOKE        = "interface_client.revoke",
    INTERFACE_CLIENT_RESTORE       = "interface_client.restore",
    INTERFACE_CLIENT_PURGE         = "interface_client.purge",

    SERVICE_CLIENT_READ_ABSOLUTE = "service_client.read_absolute",
    SERVICE_CLIENT_CREATE        = "service_client.create",
    SERVICE_CLIENT_UPDATE        = "service_client.update",
    SERVICE_CLIENT_REVOKE        = "service_client.revoke",
    SERVICE_CLIENT_RESTORE       = "service_client.restore",
    SERVICE_CLIENT_PURGE         = "service_client.purge",

    MEMBERSHIP_HISTORY_READ_PERSONAL = "membership_history.read_personal",
    MEMBERSHIP_HISTORY_READ_ABSOLUTE = "membership_history.read_absolute",

    // ---------------------------------------------------------------------------
    // Notification
    // ---------------------------------------------------------------------------

    RECIPIENT_READ_PERSONAL      = "recipient.read_personal",
    RECIPIENT_READ_ABSOLUTE      = "recipient.read_absolute",
    RECIPIENT_UPDATE             = "recipient.update",
    RECIPIENT_SELECT_OTP_CHANNEL = "recipient.select_otp_channel",

    CHANNEL_READ_PERSONAL = "channel.read_personal",
    CHANNEL_READ_ABSOLUTE = "channel.read_absolute",
    CHANNEL_TOGGLE_SOUND  = "channel.toggle_sound",

    NOTIFICATION_READ_PERSONAL = "notification.read_personal",
    NOTIFICATION_READ_ABSOLUTE = "notification.read_absolute",

    MESSAGE_READ_PERSONAL = "message.read_personal",
    MESSAGE_READ_ABSOLUTE = "message.read_absolute",
    MESSAGE_MARK_READ     = "message.mark_read",

    PREFERENCE_READ_PERSONAL = "preference.read_personal",
    PREFERENCE_READ_ABSOLUTE = "preference.read_absolute",
    PREFERENCE_TOGGLE        = "preference.toggle",
    /* eslint-enable prettier/prettier */
}
