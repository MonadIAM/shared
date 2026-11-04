/* eslint-disable @typescript-eslint/explicit-function-return-type, prettier/prettier */
import { SYSTEM_REALM_ID } from "../../../constants";
import { PermissionCode } from "../../../enums";

const CREATED_AT = new Date("2026-01-01T00:00:00.000Z");

const entry = (id: string, code: string, name: string, description: string) => ({
    id,
    code,
    name,
    description,
    realm_id: SYSTEM_REALM_ID,
    is_system_managed: true,
    is_revoked: false,
    created_at: CREATED_AT,
    version: 1,
});

const dataset = [
    // ---------------------------------------------------------------------------
    // AccessControl
    // ---------------------------------------------------------------------------

    // Realm
    entry(
        "6deeef8c-1ccb-4bb9-bda0-1a66e79ea169",
        PermissionCode.REALM_READ_PERSONAL,
        "Read Personal Realms",
        "View details of realms available to the current account.",
    ),
    entry(
        "917be6e7-e12f-42ef-b907-89ef064c6368",
        PermissionCode.REALM_READ_ABSOLUTE,
        "Read Absolute Realms",
        "View details of all realms.",
    ),
    entry(
        "eb04a59e-92c5-409e-8723-d1a1e3ac717e",
        PermissionCode.REALM_CREATE,
        "Create Realm",
        "Create a new realm.",
    ),
    entry(
        "16461ba2-a4d7-428a-8c5d-ad73bb78c717",
        PermissionCode.REALM_UPDATE,
        "Update Realm",
        "Modify metadata of a realm.",
    ),
    entry(
        "e3ca5b9c-a06d-4557-8d2c-cd2c1dd37923",
        PermissionCode.REALM_REVOKE,
        "Revoke Realm",
        "Soft-delete a realm.",
    ),
    entry(
        "1af9d448-1d0e-4299-9868-fe9af20407d8",
        PermissionCode.REALM_RESTORE,
        "Restore Realm",
        "Restore a previously revoked realm.",
    ),
    entry(
        "95de31df-8f9e-413b-bd29-87e357cd7a62",
        PermissionCode.REALM_PURGE,
        "Purge Realm",
        "Permanently delete a revoked realm.",
    ),
    entry(
        "b9ab9281-0fab-4b18-8047-7c87fa7d9014",
        PermissionCode.REALM_EXCLUDE,
        "Exclude Account from Realm",
        "Remove an account from a realm, purging all role assignments and permission overrides.",
    ),

    // Role
    entry(
        "e2d6795e-b3b1-4a97-9f7b-11730aae403c",
        PermissionCode.ROLE_READ_COMMON,
        "Read Common Roles",
        "View common role data within a realm.",
    ),
    entry(
        "978fcbf8-1063-4c3d-bcc1-f0787f367d32",
        PermissionCode.ROLE_READ_PERSONAL,
        "Read Personal Roles",
        "View personal role data derived from the current account.",
    ),
    entry(
        "4f4e42a4-93ee-4ce7-9629-be8852cefd1e",
        PermissionCode.ROLE_READ_ABSOLUTE,
        "Read Absolute Roles",
        "View all role data within a realm.",
    ),
    entry(
        "66666f91-68f1-4bef-8f03-8fe26e26a004",
        PermissionCode.ROLE_CREATE,
        "Create Role",
        "Create a new role.",
    ),
    entry(
        "7fb919b7-3472-4d9e-9194-1587cec86038",
        PermissionCode.ROLE_UPDATE,
        "Update Role",
        "Modify metadata of a role.",
    ),
    entry(
        "fa0e1888-42bb-4779-b52e-c8c4ed94937d",
        PermissionCode.ROLE_HIERARCHY_UPDATE,
        "Update Role Hierarchy",
        "Move roles or subtrees within the role hierarchy.",
    ),
    entry(
        "13f8994b-620f-44cf-978e-d46fc19ec08e",
        PermissionCode.ROLE_REVOKE,
        "Revoke Role",
        "Soft-delete a role.",
    ),
    entry(
        "2d5cb22c-1171-432b-bfb7-a96e3774777c",
        PermissionCode.ROLE_RESTORE,
        "Restore Role",
        "Restore a previously revoked role.",
    ),
    entry(
        "4af14c5d-221d-4693-be5b-e9cd5b620fa9",
        PermissionCode.ROLE_PURGE,
        "Purge Role",
        "Permanently delete a revoked role.",
    ),
    entry(
        "beb5da67-7330-46d0-ab84-3f1379c5cbe3",
        PermissionCode.ROLE_PURGE_SUBTREE,
        "Purge Role Subtree",
        "Permanently delete a role and its entire descendant hierarchy.",
    ),

    // Permission
    entry(
        "6478c0fe-ea0e-4709-a734-8050d78d285b",
        PermissionCode.PERMISSION_READ_COMMON,
        "Read Common Permissions",
        "View common permission data within a realm.",
    ),
    entry(
        "a402f620-a4d7-4802-9b54-c2e1371b0f7c",
        PermissionCode.PERMISSION_READ_PERSONAL,
        "Read Personal Permissions",
        "View personal permission data derived from the current account.",
    ),
    entry(
        "7030eae1-e1c0-42dd-80f8-2901c957c7e1",
        PermissionCode.PERMISSION_READ_ABSOLUTE,
        "Read Absolute Permissions",
        "View all permission data within a realm.",
    ),
    entry(
        "689fcbf7-c090-4ef3-aa80-145d6cfd01f0",
        PermissionCode.PERMISSION_CREATE,
        "Create Permission",
        "Create a new permission.",
    ),
    entry(
        "ace911ae-106f-4c44-946f-70d53d515a4d",
        PermissionCode.PERMISSION_UPDATE,
        "Update Permission",
        "Modify metadata of a permission.",
    ),
    entry(
        "993ddd92-56e8-4f98-944e-759c2f468486",
        PermissionCode.PERMISSION_REVOKE,
        "Revoke Permission",
        "Soft-delete a permission.",
    ),
    entry(
        "6a78491d-a172-4e63-87b3-29ddc7fdd69f",
        PermissionCode.PERMISSION_RESTORE,
        "Restore Permission",
        "Restore a previously revoked permission.",
    ),
    entry(
        "6a216a82-2c1e-4b9c-869d-1d10d0661c73",
        PermissionCode.PERMISSION_PURGE,
        "Purge Permission",
        "Permanently delete a revoked permission.",
    ),

    // RolePermissionAssignment
    entry(
        "25e74e01-f049-426f-8551-a91e0bda3746",
        PermissionCode.ROLE_PERMISSION_ASSIGNMENT_READ_COMMON,
        "Read Common Role Permission Assignments",
        "View role-to-permission assignments within a realm.",
    ),
    entry(
        "57086a67-0010-4be5-acf5-876c44afdf48",
        PermissionCode.ROLE_PERMISSION_ASSIGNMENT_CREATE,
        "Create Role Permission Assignment",
        "Assign a permission to a role.",
    ),
    entry(
        "5726c49e-6761-4fd1-8ef5-2eb94cc23602",
        PermissionCode.ROLE_PERMISSION_ASSIGNMENT_REVOKE,
        "Revoke Role Permission Assignment",
        "Soft-delete a role-to-permission assignment.",
    ),
    entry(
        "f3443cb2-ad88-4f7f-84c5-b48eed3846b7",
        PermissionCode.ROLE_PERMISSION_ASSIGNMENT_RESTORE,
        "Restore Role Permission Assignment",
        "Restore a previously revoked role-to-permission assignment.",
    ),
    entry(
        "0e99be79-9ab3-4969-8b92-99db99cb3c0a",
        PermissionCode.ROLE_PERMISSION_ASSIGNMENT_PURGE,
        "Purge Role Permission Assignment",
        "Permanently delete a revoked role-to-permission assignment.",
    ),
    entry(
        "d9d55f56-b8e5-45cc-b400-e05d611b7034",
        PermissionCode.ROLE_PERMISSION_ASSIGNMENT_READ_ABSOLUTE,
        "Read Absolute Role Permission Assignments",
        "View all role-to-permission assignments within a realm.",
    ),

    // AccountRoleAssignment
    entry(
        "6531703c-c144-4ee2-a220-4db282bdfe26",
        PermissionCode.ACCOUNT_ROLE_ASSIGNMENT_READ_COMMON,
        "Read Common Account Role Assignments",
        "View account-to-role assignments within a realm.",
    ),
    entry(
        "935f38ba-f47b-45b2-ab25-267834c39581",
        PermissionCode.ACCOUNT_ROLE_ASSIGNMENT_CREATE,
        "Create Account Role Assignment",
        "Assign a role to an account.",
    ),
    entry(
        "4e102517-4ec1-4aff-8e51-b52153795a99",
        PermissionCode.ACCOUNT_ROLE_ASSIGNMENT_REVOKE,
        "Revoke Account Role Assignment",
        "Soft-delete an account-to-role assignment.",
    ),
    entry(
        "ca052dd9-5a7c-4d9e-9fbc-de5b1db70051",
        PermissionCode.ACCOUNT_ROLE_ASSIGNMENT_RESTORE,
        "Restore Account Role Assignment",
        "Restore a previously revoked account-to-role assignment.",
    ),
    entry(
        "65ac19e1-248a-4e58-9286-bf76742e388d",
        PermissionCode.ACCOUNT_ROLE_ASSIGNMENT_PURGE,
        "Purge Account Role Assignment",
        "Permanently delete a revoked account-to-role assignment.",
    ),
    entry(
        "e0038dc4-2b76-4ce9-baf5-a269bad2a364",
        PermissionCode.ACCOUNT_ROLE_ASSIGNMENT_READ_ABSOLUTE,
        "Read Absolute Account Role Assignments",
        "View all account-to-role assignments within a realm.",
    ),

    // PermissionOverride
    entry(
        "1b791985-50aa-4597-8b60-4f2d95ac29da",
        PermissionCode.PERMISSION_OVERRIDE_READ_PERSONAL,
        "Read Personal Permission Overrides",
        "View DAC permission overrides of the current account.",
    ),
    entry(
        "ff30c66f-230d-4809-95a4-fda192ae9b58",
        PermissionCode.PERMISSION_OVERRIDE_READ_ABSOLUTE,
        "Read Absolute Permission Overrides",
        "View all DAC permission overrides within a realm.",
    ),
    entry(
        "6005c3b3-16ea-4f13-872d-b9e6c20e987e",
        PermissionCode.PERMISSION_OVERRIDE_CREATE,
        "Create Permission Override",
        "Create an explicit ALLOW or DENY override for an account.",
    ),
    entry(
        "6f9eab81-4884-49cd-81b2-86e664ce9d23",
        PermissionCode.PERMISSION_OVERRIDE_REVOKE,
        "Revoke Permission Override",
        "Soft-delete a permission override.",
    ),
    entry(
        "8875a7f5-5c85-4656-bd26-622117516f11",
        PermissionCode.PERMISSION_OVERRIDE_RESTORE,
        "Restore Permission Override",
        "Restore a previously revoked permission override.",
    ),
    entry(
        "fd38c8c7-0c33-4d26-be2f-bd442833ba13",
        PermissionCode.PERMISSION_OVERRIDE_PURGE,
        "Purge Permission Override",
        "Permanently delete a revoked permission override.",
    ),

    // RoleDelegationPolicy
    entry(
        "748d53f8-bf0f-407d-995f-03416a16487e",
        PermissionCode.ROLE_DELEGATION_POLICY_READ_COMMON,
        "Read Common Role Delegation Policies",
        "View role delegation policies within a realm.",
    ),
    entry(
        "c8c3deb7-10d4-4b72-b815-123a0d9389e6",
        PermissionCode.ROLE_DELEGATION_POLICY_CREATE,
        "Create Role Delegation Policy",
        "Define a new role delegation policy.",
    ),
    entry(
        "f5788d86-149a-4ccb-9236-3f0a42005e64",
        PermissionCode.ROLE_DELEGATION_POLICY_UPDATE,
        "Update Role Delegation Policy",
        "Modify an existing role delegation policy.",
    ),
    entry(
        "be24c78f-5efc-4704-b6bc-f1c5e42f52cb",
        PermissionCode.ROLE_DELEGATION_POLICY_REVOKE,
        "Revoke Role Delegation Policy",
        "Soft-delete a role delegation policy.",
    ),
    entry(
        "7a747950-caf2-4315-821f-47bf494cfbf0",
        PermissionCode.ROLE_DELEGATION_POLICY_RESTORE,
        "Restore Role Delegation Policy",
        "Restore a previously revoked role delegation policy.",
    ),
    entry(
        "4a0784ae-f692-4a8b-9eff-2f577eedd8ce",
        PermissionCode.ROLE_DELEGATION_POLICY_PURGE,
        "Purge Role Delegation Policy",
        "Permanently delete a revoked role delegation policy.",
    ),
    entry(
        "2b6e7572-1506-40d4-b529-78203820a350",
        PermissionCode.ROLE_DELEGATION_POLICY_READ_ABSOLUTE,
        "Read Absolute Role Delegation Policies",
        "View all role delegation policies within a realm.",
    ),

    // RoleConflictGroup
    entry(
        "c4b1da26-106b-49e7-9ea0-8f3d2be5b0ab",
        PermissionCode.ROLE_CONFLICT_GROUP_READ_ABSOLUTE,
        "Read Absolute Role Conflict Groups",
        "View all SoD conflict groups within a realm.",
    ),
    entry(
        "27fc4d9a-1b07-46b8-93fb-e92b03f6060d",
        PermissionCode.ROLE_CONFLICT_GROUP_CREATE,
        "Create Role Conflict Group",
        "Define a new SoD conflict group.",
    ),
    entry(
        "51926e83-6267-462e-80c3-6a3212726a10",
        PermissionCode.ROLE_CONFLICT_GROUP_UPDATE,
        "Update Role Conflict Group",
        "Modify metadata of a SoD conflict group.",
    ),
    entry(
        "09c99aac-82fa-41e0-af48-abc50ba9b2c7",
        PermissionCode.ROLE_CONFLICT_GROUP_REVOKE,
        "Revoke Role Conflict Group",
        "Soft-delete a SoD conflict group.",
    ),
    entry(
        "18715459-4ab9-499c-898f-dbf52a3c285c",
        PermissionCode.ROLE_CONFLICT_GROUP_RESTORE,
        "Restore Role Conflict Group",
        "Restore a previously revoked SoD conflict group.",
    ),
    entry(
        "1c8f41ae-0566-4b7a-9ed7-b240f2d30222",
        PermissionCode.ROLE_CONFLICT_GROUP_PURGE,
        "Purge Role Conflict Group",
        "Permanently delete a revoked SoD conflict group.",
    ),

    // RoleConflictMember
    entry(
        "fb3a63ed-036f-42d1-8f9d-2faba84ccf6f",
        PermissionCode.ROLE_CONFLICT_MEMBER_READ_ABSOLUTE,
        "Read Absolute Role Conflict Members",
        "View all role memberships in SoD conflict groups within a realm.",
    ),
    entry(
        "43a752d7-523a-4579-8d6e-07a75f3d6ef9",
        PermissionCode.ROLE_CONFLICT_MEMBER_CREATE,
        "Create Role Conflict Member",
        "Add a role as a member of a SoD conflict group.",
    ),
    entry(
        "9df871bc-8421-42c3-a192-bdec89b8e27f",
        PermissionCode.ROLE_CONFLICT_MEMBER_PURGE,
        "Purge Role Conflict Member",
        "Permanently remove a role from a SoD conflict group.",
    ),

    // AuditLog
    entry(
        "2ff4e21a-2cc1-4446-bf41-17739c05e11c",
        PermissionCode.AUDIT_LOG_READ_ABSOLUTE,
        "Read Absolute Audit Log",
        "View audit logs within a realm.",
    ),

    // ChangeLog
    entry(
        "c0a8fdc1-bf65-4692-9fd0-455d540c1987",
        PermissionCode.CHANGE_LOG_READ_ABSOLUTE,
        "Read Absolute Change Log",
        "View change logs within a realm.",
    ),

    // ---------------------------------------------------------------------------
    // Identity
    // ---------------------------------------------------------------------------

    // Account
    entry(
        "cd3f65fc-e785-4633-a8af-63d873b99a74",
        PermissionCode.ACCOUNT_READ_PERSONAL,
        "Read Own Account",
        "View details of the current account.",
    ),
    entry(
        "b124027e-51a3-43b8-80c2-d9462b99a8b4",
        PermissionCode.ACCOUNT_READ_COMMON,
        "Read Public Account",
        "View publicly available account details.",
    ),
    entry(
        "35b51f09-25ee-488e-b71a-f78122072e46",
        PermissionCode.ACCOUNT_READ_ABSOLUTE,
        "Read Any Account",
        "View details of any account.",
    ),
    entry(
        "bb32bcca-5cda-42bf-8006-bcc4206a0c3b",
        PermissionCode.ACCOUNT_SUSPEND,
        "Suspend Account",
        "Suspend an account.",
    ),
    entry(
        "e03b6e33-f980-4c4e-94f2-c9a36ab672b8",
        PermissionCode.ACCOUNT_RESTORE,
        "Restore Account",
        "Restore a suspended account.",
    ),
    entry(
        "7b118f4a-47c2-4963-be86-3151131ba272",
        PermissionCode.ACCOUNT_DEACTIVATE,
        "Deactivate Own Account",
        "Voluntarily deactivate the current account.",
    ),

    // Reauthentication
    entry(
        "0ac7e049-738e-4234-adda-2b35849e51b3",
        PermissionCode.REAUTHENTICATION_CONFIRM_PASSWORD,
        "Confirm Reauthentication by Password",
        "Confirm reauthentication using the current account password.",
    ),
    entry(
        "4c3903e9-2542-4e18-9ecf-e3df4a35e267",
        PermissionCode.REAUTHENTICATION_CONFIRM_SECOND_FACTOR,
        "Confirm Reauthentication by Second Factor",
        "Confirm reauthentication using a second factor.",
    ),
    entry(
        "93ef9d79-0b68-48d0-8f66-066d905ddd6e",
        PermissionCode.REAUTHENTICATION_CONFIRM_OTP,
        "Confirm Reauthentication by Email",
        "Confirm reauthentication using a verified email when no password or second factor is configured.",
    ),

    // Identifier
    entry(
        "38514741-b339-43eb-8a51-7b8a8f470765",
        PermissionCode.IDENTIFIER_READ_PERSONAL,
        "Read Own Identifiers",
        "View identifiers owned by the current account.",
    ),
    entry(
        "b1acf03a-8e5b-49e7-9be3-62be4e237851",
        PermissionCode.IDENTIFIER_READ_ABSOLUTE,
        "Read Any Identifier",
        "View identifiers owned by any account.",
    ),
    entry(
        "545f6fe1-3f20-47f9-abca-2e668bbc50c3",
        PermissionCode.IDENTIFIER_CREATE,
        "Create Identifier",
        "Add an identifier to the current account.",
    ),
    entry(
        "4db864f9-4e6f-448f-ae4d-d77213773b7d",
        PermissionCode.IDENTIFIER_RESEND,
        "Resend Identifier Verification",
        "Resend verification for an account identifier.",
    ),
    entry(
        "544c81c6-e889-4034-a62a-0f8db6ffe02f",
        PermissionCode.IDENTIFIER_VERIFY,
        "Verify Identifier",
        "Verify an account identifier using OTP.",
    ),
    entry(
        "2ee7229b-1385-47b3-8438-507028acfb6d",
        PermissionCode.IDENTIFIER_TOGGLE_NOTIFICATIONS,
        "Toggle Identifier Notifications",
        "Enable or disable notifications for an account identifier.",
    ),
    entry(
        "7379fbd8-2eee-41b1-a067-b32e8490ee96",
        PermissionCode.IDENTIFIER_TOGGLE_PUBLIC_CONTACT,
        "Toggle Identifier Public Contact",
        "Enable or disable public contact visibility for an account identifier.",
    ),
    entry(
        "f08b4136-ec6f-43a8-8236-c7b12e393a6e",
        PermissionCode.IDENTIFIER_PURGE,
        "Purge Identifier",
        "Permanently remove an identifier from the current account.",
    ),

    // Password
    entry(
        "b65939ff-d69c-4285-a794-d27750054b30",
        PermissionCode.PASSWORD_CHANGE,
        "Change Password",
        "Change the current account password.",
    ),

    // Profile
    entry(
        "56664e3a-a598-48b6-9035-3a8b054ba145",
        PermissionCode.PROFILE_UPDATE,
        "Update Profile",
        "Update the current account profile.",
    ),

    // RecoveryCode
    entry(
        "e347b9e0-0b03-4066-b595-dbb5fc81f9c3",
        PermissionCode.RECOVERY_CODE_READ_STATUS,
        "Read Recovery Code Status",
        "View recovery code status for the current account.",
    ),
    entry(
        "be524365-a8f6-44ce-89d3-681be1bccdbb",
        PermissionCode.RECOVERY_CODE_REGENERATE,
        "Regenerate Recovery Codes",
        "Regenerate recovery codes for the current account.",
    ),

    // SecondFactor
    entry(
        "9f63d44f-ea39-4794-ab1e-90d5e156c9f2",
        PermissionCode.SECOND_FACTOR_READ_PERSONAL,
        "Read Own Second Factors",
        "View second factors owned by the current account.",
    ),
    entry(
        "d9fe5a4d-8982-46fd-a51d-8f09352458ca",
        PermissionCode.SECOND_FACTOR_READ_ABSOLUTE,
        "Read Any Second Factor",
        "View second factors owned by any account.",
    ),
    entry(
        "26303cdd-f27a-4f85-9e1f-11c3452a4985",
        PermissionCode.SECOND_FACTOR_CREATE,
        "Create Second Factor",
        "Create a second factor for the current account.",
    ),
    entry(
        "49d7c4d2-6d9f-4629-8eab-14f9d0df04b2",
        PermissionCode.SECOND_FACTOR_VERIFY,
        "Verify Second Factor",
        "Verify a second factor for the current account.",
    ),
    entry(
        "9c0aa04d-827c-456c-af97-f4bbdcc6d319",
        PermissionCode.SECOND_FACTOR_PURGE,
        "Purge Second Factor",
        "Permanently remove a second factor from the current account.",
    ),

    // Session
    entry(
        "bd7dd551-47d0-4fbb-81f6-2780b0bd26d2",
        PermissionCode.SESSION_READ_PERSONAL,
        "Read Own Sessions",
        "View sessions owned by the current account.",
    ),
    entry(
        "981f579d-69f2-4cc5-90b9-927474194c65",
        PermissionCode.SESSION_READ_ABSOLUTE,
        "Read Any Session",
        "View sessions owned by any account.",
    ),
    entry(
        "b217f9d9-ac26-41a6-9095-3f42424baf4d",
        PermissionCode.SESSION_REVOKE,
        "Revoke Selected Sessions",
        "Revoke selected sessions for the current account.",
    ),
    entry(
        "67122139-d268-4173-9557-37c0f539d59d",
        PermissionCode.SESSION_REVOKE_ALL,
        "Revoke All Sessions",
        "Revoke all sessions for the current account.",
    ),

    // InterfaceClient
    entry(
        "ff1f21b9-e778-4745-8fb4-728ce5403abe",
        PermissionCode.INTERFACE_CLIENT_READ_ABSOLUTE,
        "Read Absolute Interface Clients",
        "View all interface clients within a realm.",
    ),
    entry(
        "e2de08ab-d0d8-4733-9baa-527eb823e204",
        PermissionCode.INTERFACE_CLIENT_CREATE,
        "Create Interface Client",
        "Create an interface client within a realm.",
    ),
    entry(
        "f45ca7a6-533c-4ceb-94b9-7689e09ec603",
        PermissionCode.INTERFACE_CLIENT_UPDATE,
        "Update Interface Client",
        "Modify an interface client within a realm.",
    ),
    entry(
        "94018aa0-3850-47d8-966b-fcccb83a6662",
        PermissionCode.INTERFACE_CLIENT_REVOKE,
        "Revoke Interface Client",
        "Revoke an interface client within a realm.",
    ),
    entry(
        "06c760f5-a4e2-4cfc-b8f1-9c0d332798dd",
        PermissionCode.INTERFACE_CLIENT_RESTORE,
        "Restore Interface Client",
        "Restore a revoked interface client within a realm.",
    ),
    entry(
        "92b47938-3c9d-42cd-a057-48d751fe23c2",
        PermissionCode.INTERFACE_CLIENT_PURGE,
        "Purge Interface Client",
        "Permanently delete a revoked interface client within a realm.",
    ),

    // ServiceClient
    entry(
        "97d16fb5-fbeb-4cb4-b8c7-5955d4db8985",
        PermissionCode.SERVICE_CLIENT_READ_ABSOLUTE,
        "Read Absolute Service Clients",
        "View all service clients within a realm.",
    ),
    entry(
        "fa0987d9-c3ba-4b9e-893d-aedd0dea4e90",
        PermissionCode.SERVICE_CLIENT_CREATE,
        "Create Service Client",
        "Create a service client within a realm.",
    ),
    entry(
        "95f2ffc3-1b49-41fc-8cee-a187f7d66fdc",
        PermissionCode.SERVICE_CLIENT_UPDATE,
        "Update Service Client",
        "Modify a service client within a realm.",
    ),
    entry(
        "1e15eead-3ef0-429b-b3ea-4bac71195e32",
        PermissionCode.SERVICE_CLIENT_REVOKE,
        "Revoke Service Client",
        "Revoke a service client within a realm.",
    ),
    entry(
        "002a10ca-db33-4e0a-8884-40c41ebb4591",
        PermissionCode.SERVICE_CLIENT_RESTORE,
        "Restore Service Client",
        "Restore a revoked service client within a realm.",
    ),
    entry(
        "79f4c580-2157-4828-92a7-9866ccb2eb63",
        PermissionCode.SERVICE_CLIENT_PURGE,
        "Purge Service Client",
        "Permanently delete a revoked service client within a realm.",
    ),

    // Membership History
    entry(
        "71c1f0d9-804e-443a-9738-c5d7d8e86ade",
        PermissionCode.MEMBERSHIP_HISTORY_READ_PERSONAL,
        "Read Personal Membership History",
        "View realm membership history records for the current account.",
    ),
    entry(
        "75eea623-9334-4736-b069-9f07a67b3ceb",
        PermissionCode.MEMBERSHIP_HISTORY_READ_ABSOLUTE,
        "Read Absolute Membership History",
        "View all realm membership history records.",
    ),
    entry(
        "0fe4a9bb-d26e-4d65-81d3-9ebee8e5bb34",
        PermissionCode.MEMBERSHIP_HISTORY_READ_COMMON,
        "Read Common Membership History",
        "View realm membership history records within a realm.",
    ),

    // ---------------------------------------------------------------------------
    // Organization
    // ---------------------------------------------------------------------------

    // Organization
    entry(
        "26bd5eb7-4e29-4871-85c7-e558241580dd",
        PermissionCode.ORGANIZATION_READ_PERSONAL,
        "Read Personal Organizations",
        "View organizations associated with the current account.",
    ),
    entry(
        "61b90e2f-f0e0-4461-9a01-6f0d59100453",
        PermissionCode.ORGANIZATION_READ_ABSOLUTE,
        "Read Absolute Organizations",
        "View all organizations.",
    ),
    entry(
        "289e0042-ea2b-4b98-bbd2-4164dd9aa2f7",
        PermissionCode.ORGANIZATION_CREATE,
        "Create Organization",
        "Create an organization owned by the current account.",
    ),
    entry(
        "fe6c1c9a-1700-49b2-9ebc-ea568e6ede0b",
        PermissionCode.ORGANIZATION_UPDATE,
        "Update Organization",
        "Modify metadata of an organization.",
    ),
    entry(
        "ae220a67-5f01-4879-b7ee-676cea2caa4d",
        PermissionCode.ORGANIZATION_TRANSFER_OWNERSHIP,
        "Transfer Organization Ownership",
        "Transfer ownership of an organization to another active member.",
    ),
    entry(
        "2408688f-cdb9-4b0d-bb7f-9faf1692275a",
        PermissionCode.ORGANIZATION_REVOKE,
        "Revoke Organization",
        "Revoke an organization.",
    ),
    entry(
        "21d319c4-b737-4b31-85a9-37598a95e376",
        PermissionCode.ORGANIZATION_RESTORE,
        "Restore Organization",
        "Restore a previously revoked organization.",
    ),
    entry(
        "3d22aa8d-73c8-4176-adca-5948c2307e18",
        PermissionCode.ORGANIZATION_PURGE,
        "Purge Organization",
        "Permanently delete a revoked organization.",
    ),

    // Invite
    entry(
        "73ec7246-3b16-49f2-832c-a9803bbf1f87",
        PermissionCode.INVITE_READ_PERSONAL,
        "Read Personal Invites",
        "View invites sent or received by the current account.",
    ),
    entry(
        "8eb7c68d-9299-4923-8e7d-afad4392549e",
        PermissionCode.INVITE_READ_COMMON,
        "Read Common Invites",
        "View all invites within an organization realm.",
    ),
    entry(
        "906b6d43-d5c7-4b06-aa32-8b3b939efd5a",
        PermissionCode.INVITE_READ_ABSOLUTE,
        "Read Absolute Invites",
        "View all invites.",
    ),
    entry(
        "af6de498-31d6-4530-bdd1-d41e25a91495",
        PermissionCode.INVITE_CREATE,
        "Create Invite",
        "Invite an account to an organization.",
    ),
    entry(
        "e591fcf8-2542-4a69-80fc-10f71bf4a53c",
        PermissionCode.INVITE_CHANGE_STATUS,
        "Change Invite Status",
        "Accept, decline, cancel, or invalidate a pending invite.",
    ),
    entry(
        "cc5762ad-305c-4538-939c-d4e575a6e1d2",
        PermissionCode.INVITE_ACCEPT,
        "Accept Invite",
        "Accept an invitation addressed to the current account.",
    ),
    entry(
        "60b4273f-16e3-435c-be14-632d3fc73a00",
        PermissionCode.INVITE_DECLINE,
        "Decline Invite",
        "Decline an invitation addressed to the current account.",
    ),
    entry(
        "05242468-6c33-47d1-9168-c73f8d4233cb",
        PermissionCode.INVITE_CANCEL,
        "Cancel Invite",
        "Cancel a pending organization invitation.",
    ),

    // Membership
    entry(
        "f9f7ea20-6a92-4b5c-b0e4-977b5340ea44",
        PermissionCode.MEMBERSHIP_READ_PERSONAL,
        "Read Personal Memberships",
        "View organization memberships of the current account.",
    ),
    entry(
        "1f55b20a-1dee-43cd-9dff-7dfe23030a22",
        PermissionCode.MEMBERSHIP_READ_COMMON,
        "Read Common Memberships",
        "View all memberships within an organization realm.",
    ),
    entry(
        "968496fe-b6d5-4bad-a1f0-7456044fdf9e",
        PermissionCode.MEMBERSHIP_READ_ABSOLUTE,
        "Read Absolute Memberships",
        "View all organization memberships.",
    ),
    entry(
        "1cd53e81-fd07-468b-9272-3fb115350cd0",
        PermissionCode.MEMBERSHIP_SUSPEND,
        "Suspend Membership",
        "Suspend an organization membership.",
    ),
    entry(
        "4ad54ec1-3004-49ae-a49e-c0d202a62b11",
        PermissionCode.MEMBERSHIP_RESUME,
        "Resume Membership",
        "Resume a suspended organization membership.",
    ),
    entry(
        "f4f2f5b0-824a-4406-afd8-ffe2a2d18ad0",
        PermissionCode.MEMBERSHIP_LEAVE,
        "Leave Organization",
        "End the current account's organization membership.",
    ),
    entry(
        "d26c8aba-07db-4b3a-aaf4-2a98b56bbe54",
        PermissionCode.MEMBERSHIP_BLOCK,
        "Block Membership",
        "Block an organization membership.",
    ),

    // Project
    entry(
        "dad5a3bf-fcf4-40c1-bb9e-cfb210c58148",
        PermissionCode.PROJECT_READ_PERSONAL,
        "Read Personal Projects",
        "View projects assigned to the current account.",
    ),
    entry(
        "f25bb49f-da36-4a4d-9559-53a43ceacf8d",
        PermissionCode.PROJECT_READ_COMMON,
        "Read Common Projects",
        "View all projects within a realm.",
    ),
    entry(
        "27eabd49-f6ab-4d69-a3c3-264af5392560",
        PermissionCode.PROJECT_READ_ABSOLUTE,
        "Read Absolute Projects",
        "View all projects.",
    ),
    entry(
        "056c725a-20ed-44e4-b012-30abb813e223",
        PermissionCode.PROJECT_CREATE,
        "Create Project",
        "Create a project within an organization.",
    ),
    entry(
        "f4bb96b9-b4c0-47d4-8060-fcc7c1acca9d",
        PermissionCode.PROJECT_UPDATE,
        "Update Project",
        "Modify metadata of a project.",
    ),
    entry(
        "c6d24dec-a95f-4722-a581-a1bb168c8e33",
        PermissionCode.PROJECT_CHANGE_MANAGER,
        "Change Project Manager",
        "Assign, replace, or remove the manager of a project.",
    ),
    entry(
        "1356b1b2-2380-4e7d-8ec9-8f386c7c9125",
        PermissionCode.PROJECT_ARCHIVE,
        "Archive Project",
        "Archive a project.",
    ),
    entry(
        "e3fb0f02-8d40-48e5-9886-8e320122f9d4",
        PermissionCode.PROJECT_RESTORE,
        "Restore Project",
        "Restore an archived project.",
    ),
    entry(
        "14e477a0-d82a-42dd-9660-71379b541ffe",
        PermissionCode.PROJECT_PURGE,
        "Purge Project",
        "Permanently delete an archived project.",
    ),

    // ProjectAccountAssignment
    entry(
        "79fc42a4-445d-44d4-8190-133c29b39eb5",
        PermissionCode.PROJECT_ACCOUNT_ASSIGNMENT_READ_PERSONAL,
        "Read Personal Project Account Assignments",
        "View project assignments of the current account.",
    ),
    entry(
        "f94ffbe8-7d5b-42d8-9ce9-b2aa98b8d474",
        PermissionCode.PROJECT_ACCOUNT_ASSIGNMENT_READ_COMMON,
        "Read Common Project Account Assignments",
        "View all project assignments within a realm.",
    ),
    entry(
        "d997931e-92a3-42ca-b639-ba39ed54fcc5",
        PermissionCode.PROJECT_ACCOUNT_ASSIGNMENT_READ_ABSOLUTE,
        "Read Absolute Project Account Assignments",
        "View all project assignments.",
    ),
    entry(
        "383415f0-6a6e-4045-8005-b0f4784ab46e",
        PermissionCode.PROJECT_ACCOUNT_ASSIGNMENT_CREATE,
        "Create Project Account Assignment",
        "Assign an organization member to a project.",
    ),
    entry(
        "6e2dc627-9a4e-485d-b8a6-7f2f0faf3d99",
        PermissionCode.PROJECT_ACCOUNT_ASSIGNMENT_REVOKE,
        "Revoke Project Account Assignment",
        "Revoke an account's project assignment.",
    ),
    entry(
        "cd2f5273-eebe-41ca-8728-9b5a04d27cbd",
        PermissionCode.PROJECT_ACCOUNT_ASSIGNMENT_RESTORE,
        "Restore Project Account Assignment",
        "Restore a revoked project account assignment.",
    ),
    entry(
        "c45f9fbb-cbfb-463e-a6c1-7e7f0e5ce090",
        PermissionCode.PROJECT_ACCOUNT_ASSIGNMENT_PURGE,
        "Purge Project Account Assignment",
        "Permanently delete a revoked project account assignment.",
    ),

    // Department
    entry(
        "f65ae5ed-11df-4bde-bace-710cd06ea889",
        PermissionCode.DEPARTMENT_READ_COMMON,
        "Read Common Departments",
        "View all departments within an organization realm.",
    ),
    entry(
        "5a1c2040-648f-4f07-9797-3769d4c00294",
        PermissionCode.DEPARTMENT_READ_ABSOLUTE,
        "Read Absolute Departments",
        "View all departments.",
    ),
    entry(
        "6380a107-f2d2-453d-bddb-af6697e20812",
        PermissionCode.DEPARTMENT_CREATE,
        "Create Department",
        "Create a department within an organization.",
    ),
    entry(
        "4294b76a-f07d-47fa-9e3f-87015683ea8e",
        PermissionCode.DEPARTMENT_UPDATE,
        "Update Department",
        "Modify metadata of a department.",
    ),
    entry(
        "aac6646f-4ee6-4089-b14f-240adbc44b8a",
        PermissionCode.DEPARTMENT_CHANGE_MANAGER,
        "Change Department Manager",
        "Assign, replace, or remove the manager of a department.",
    ),
    entry(
        "32b7bf36-07f2-4550-8b8e-e646eac2f6a7",
        PermissionCode.DEPARTMENT_ARCHIVE,
        "Archive Department",
        "Archive a department.",
    ),
    entry(
        "f7db742a-f2bb-4c8c-979f-d2227fbba33a",
        PermissionCode.DEPARTMENT_RESTORE,
        "Restore Department",
        "Restore an archived department.",
    ),
    entry(
        "2f97ab6e-206e-4722-8021-e01ad6302f59",
        PermissionCode.DEPARTMENT_PURGE,
        "Purge Department",
        "Permanently delete an archived department.",
    ),


    // Team
    entry(
        "52068e43-557d-4136-90e9-2e8871317e78",
        PermissionCode.TEAM_READ_COMMON,
        "Read Common Teams",
        "View all teams within an organization realm.",
    ),
    entry(
        "e7b6f531-fa20-4bf8-ad43-565e9d4ec5db",
        PermissionCode.TEAM_READ_ABSOLUTE,
        "Read Absolute Teams",
        "View all teams.",
    ),
    entry(
        "22b31ce8-9046-4a67-b675-2c8e56bf6e26",
        PermissionCode.TEAM_CREATE,
        "Create Team",
        "Create a team within an organization.",
    ),
    entry(
        "3651fcad-b5fb-4d33-9537-c868eeb8a353",
        PermissionCode.TEAM_UPDATE,
        "Update Team",
        "Modify metadata of a team.",
    ),
    entry(
        "94c63f21-74a4-4919-be92-6f372ff59483",
        PermissionCode.TEAM_CHANGE_LEAD,
        "Change Team Lead",
        "Assign, replace, or remove the lead of a team.",
    ),
    entry(
        "737b153e-1761-4240-89d8-4f1a982b3010",
        PermissionCode.TEAM_ARCHIVE,
        "Archive Team",
        "Archive a team.",
    ),
    entry(
        "d2505b3a-0642-4563-832b-bb14a54718ed",
        PermissionCode.TEAM_RESTORE,
        "Restore Team",
        "Restore an archived team.",
    ),
    entry(
        "0bec03a5-7561-40f0-a2ae-6691c4fc11d2",
        PermissionCode.TEAM_PURGE,
        "Purge Team",
        "Permanently delete an archived team.",
    ),


    // ---------------------------------------------------------------------------
    // Human Resources
    // ---------------------------------------------------------------------------

    // Employee
    entry(
        "dab68946-fa34-4449-acf3-511fca2e7f0a",
        PermissionCode.EMPLOYEE_READ_COMMON,
        "Read Common Employees",
        "View all employees within an organization realm.",
    ),
    entry(
        "403c6b88-ccbb-4128-8619-7b6ec33b2f52",
        PermissionCode.EMPLOYEE_READ_ABSOLUTE,
        "Read Absolute Employees",
        "View all employees.",
    ),
    entry(
        "f86c7fe6-608a-42ba-9c5d-f258b3a360ae",
        PermissionCode.EMPLOYEE_CREATE,
        "Create Employee",
        "Create an employee.",
    ),
    entry(
        "3fe9786a-1118-405e-9500-358c7bd7ae00",
        PermissionCode.EMPLOYEE_UPDATE,
        "Update Employee",
        "Modify employee metadata.",
    ),
    entry(
        "edcedb99-a7a0-4580-8039-6300e7243316",
        PermissionCode.EMPLOYEE_ARCHIVE,
        "Archive Employee",
        "Archive an employee.",
    ),
    entry(
        "1f70b70a-b169-428f-b934-980e3ebc69b0",
        PermissionCode.EMPLOYEE_RESTORE,
        "Restore Employee",
        "Restore an archived employee.",
    ),
    entry(
        "b47ab809-e6bd-4b4c-a8a4-3d04f0b9bc89",
        PermissionCode.EMPLOYEE_LINK_ACCOUNT,
        "Link Account to Employee",
        "Link an account to an employee.",
    ),
    entry(
        "66989996-34aa-4d45-a0aa-383db71d6b25",
        PermissionCode.EMPLOYEE_SET_HRBP,
        "Set Employee HRBP",
        "Assign or replace an employee's HRBP.",
    ),
    entry(
        "6c6830d3-8119-4c41-a4dd-fe48e5c45eaf",
        PermissionCode.EMPLOYEE_READ_PERSONAL,
        "Read Personal Employee",
        "View only the employee record linked to the current account in the organization.",
    ),

    // Employment
    entry(
        "6e840569-4285-45da-b0a0-d23bd9dab935",
        PermissionCode.EMPLOYMENT_READ_COMMON,
        "Read Common Employments",
        "View all employments within an organization realm.",
    ),
    entry(
        "da37898d-3dcc-4120-8c4b-8bdaad459079",
        PermissionCode.EMPLOYMENT_READ_ABSOLUTE,
        "Read Absolute Employments",
        "View all employments.",
    ),

    // Absence
    entry(
        "14442bb9-e0fa-4645-a875-a6740a84b3c3",
        PermissionCode.ABSENCE_READ_COMMON,
        "Read Common Absences",
        "View all absences within an organization realm.",
    ),
    entry(
        "1e0f7364-3878-4e18-a2b0-6555b13cb477",
        PermissionCode.ABSENCE_READ_ABSOLUTE,
        "Read Absolute Absences",
        "View all absences.",
    ),

    // HRRequest
    entry(
        "92492ff3-6738-444f-bc01-a9e62e810cd1",
        PermissionCode.HR_REQUEST_READ_COMMON,
        "Read Common HR Requests",
        "View all HR requests within an organization realm.",
    ),
    entry(
        "68c206b8-0240-4d36-8f8e-5366e9637465",
        PermissionCode.HR_REQUEST_READ_ABSOLUTE,
        "Read Absolute HR Requests",
        "View all HR requests.",
    ),
    entry(
        "0e65db55-ec37-41e8-b910-4435e00310b0",
        PermissionCode.HR_REQUEST_CREATE,
        "Create HR Request",
        "Create an HR request.",
    ),
    entry(
        "cdfc1aff-51b8-4f4a-853c-2424c49acf67",
        PermissionCode.HR_REQUEST_UPDATE,
        "Update HR Request",
        "Modify an HR request.",
    ),
    entry(
        "6a0a3a7f-112a-4e6f-94a6-1f20a5cfd569",
        PermissionCode.HR_REQUEST_SUBMIT,
        "Submit HR Request",
        "Submit an HR request for approval.",
    ),
    entry(
        "af7965ce-c474-43b7-9127-de7a7526be49",
        PermissionCode.HR_REQUEST_WITHDRAW,
        "Withdraw HR Request",
        "Withdraw an HR request.",
    ),
    entry(
        "bb21f4a8-61b4-47de-983c-83e954bd4e4f",
        PermissionCode.HR_REQUEST_READ_PERSONAL,
        "Read Personal HR Requests",
        "View only HR requests concerning the employee linked to the current account.",
    ),
    entry(
        "e61fe5e9-ac2f-48d1-bfce-8ce3830e1a36",
        PermissionCode.HR_REQUEST_CREATE_PERSONAL,
        "Create Personal HR Request",
        "Create a self-service request for the current employee; excludes hiring, termination and employment terms changes.",
    ),
    entry(
        "105fb37a-0505-4050-8d43-6984d322ce30",
        PermissionCode.HR_REQUEST_UPDATE_PERSONAL,
        "Update Personal HR Request",
        "Modify only a self-service draft initiated by the current account for its own employee.",
    ),
    entry(
        "efb4f704-ae5e-4789-a1a9-c58be2cb8fdf",
        PermissionCode.HR_REQUEST_SUBMIT_PERSONAL,
        "Submit Personal HR Request",
        "Submit only a self-service draft initiated by the current account for its own employee.",
    ),
    entry(
        "0d7d2a49-f091-4d9e-a57e-fa17847c00a0",
        PermissionCode.HR_REQUEST_WITHDRAW_PERSONAL,
        "Withdraw Personal HR Request",
        "Withdraw only a self-service request initiated by the current account for its own employee.",
    ),
    entry(
        "8be5a7ed-7333-444d-8c43-7b18b9bf053d",
        PermissionCode.HR_REQUEST_READ_ASSIGNED,
        "Read Assigned HR Requests",
        "View only HR requests with an approval step assigned to the employee linked to the current account.",
    ),

    // HRApprovalStep
    entry(
        "12491888-d336-4592-9722-7f74570fba32",
        PermissionCode.HR_APPROVAL_STEP_READ_COMMON,
        "Read Common HR Approval Steps",
        "View all HR approval steps within an organization realm.",
    ),
    entry(
        "d95e962f-d1f6-46e0-bb32-9ea03b1cf9b6",
        PermissionCode.HR_APPROVAL_STEP_READ_ABSOLUTE,
        "Read Absolute HR Approval Steps",
        "View all HR approval steps.",
    ),
    entry(
        "7291b9fa-3061-482a-b218-310acbf72b38",
        PermissionCode.HR_APPROVAL_STEP_APPROVE,
        "Approve HR Approval Step",
        "Approve an HR approval step.",
    ),
    entry(
        "24909bcc-0cf0-46cf-b322-f46147adf170",
        PermissionCode.HR_APPROVAL_STEP_REJECT,
        "Reject HR Approval Step",
        "Reject an HR approval step.",
    ),
    entry(
        "a4eabe95-fac2-456f-b31e-8b6cb5df8bc1",
        PermissionCode.HR_APPROVAL_STEP_RETURN_FOR_REVISION,
        "Return HR Approval Step for Revision",
        "Return an HR request for revision.",
    ),
    entry(
        "5ef8361a-33bf-4f11-bd86-b524a657fb0b",
        PermissionCode.HR_APPROVAL_STEP_REASSIGN,
        "Reassign HR Approval Step",
        "Reassign an HR approval step.",
    ),
    entry(
        "6276b10d-906a-4948-bc44-80456381bd1b",
        PermissionCode.HR_APPROVAL_STEP_READ_ASSIGNED,
        "Read Assigned HR Approval Steps",
        "View only approval steps assigned to the employee linked to the current account.",
    ),

    // HRApprovalDecision
    entry(
        "99f3da8e-60aa-410d-9a93-77bcb9daf1e5",
        PermissionCode.HR_APPROVAL_DECISION_READ_COMMON,
        "Read Common HR Approval Decisions",
        "View all HR approval decisions within an organization realm.",
    ),
    entry(
        "18a127aa-4417-4939-b2d2-f153493edcca",
        PermissionCode.HR_APPROVAL_DECISION_READ_ABSOLUTE,
        "Read Absolute HR Approval Decisions",
        "View all HR approval decisions.",
    ),

    // LeaveLedgerEntry
    entry(
        "fc7eab15-c13a-4c06-9f3d-b4f3e57bd6a1",
        PermissionCode.LEAVE_LEDGER_ENTRY_READ_COMMON,
        "Read Common Leave Ledger Entries",
        "View all leave ledger entries within an organization realm.",
    ),
    entry(
        "b54ddc69-c40f-4410-bba7-d04a8175006d",
        PermissionCode.LEAVE_LEDGER_ENTRY_READ_ABSOLUTE,
        "Read Absolute Leave Ledger Entries",
        "View all leave ledger entries.",
    ),

    // LeavePolicy
    entry(
        "79e3acc6-7c01-4dcc-ae47-67e30d4a21d9",
        PermissionCode.LEAVE_POLICY_READ_COMMON,
        "Read Common Leave Policies",
        "View all leave policies within an organization realm.",
    ),
    entry(
        "7ea0057b-7a1f-4f66-915f-fb3d32d9bc80",
        PermissionCode.LEAVE_POLICY_READ_ABSOLUTE,
        "Read Absolute Leave Policies",
        "View all leave policies.",
    ),
    entry(
        "b23b8747-0446-4a94-a06a-bfff732e9c8d",
        PermissionCode.LEAVE_POLICY_CREATE,
        "Create Leave Policy",
        "Create a leave policy.",
    ),
    entry(
        "bbfb20e8-fb12-441b-b2d2-0fbd1e4449b5",
        PermissionCode.LEAVE_POLICY_CREATE_REVISION,
        "Create Leave Policy Revision",
        "Create a revision of a leave policy.",
    ),
    entry(
        "7dc5dd87-e8fb-4506-b927-368514e03107",
        PermissionCode.LEAVE_POLICY_ARCHIVE,
        "Archive Leave Policy",
        "Archive a leave policy.",
    ),
    entry(
        "8c5c415d-1cd3-4f8a-bc52-e2bc5e8247b4",
        PermissionCode.LEAVE_POLICY_RESTORE,
        "Restore Leave Policy",
        "Restore an archived leave policy.",
    ),
    entry(
        "caa308ca-afbb-4252-8d90-cec552c699b7",
        PermissionCode.LEAVE_POLICY_PURGE,
        "Purge Leave Policy",
        "Permanently delete an archived leave policy.",
    ),

    // Position
    entry(
        "f0fedc09-67e2-47a2-ad4c-b3f98b3848a0",
        PermissionCode.POSITION_READ_COMMON,
        "Read Common Positions",
        "View all positions within an organization realm.",
    ),
    entry(
        "0f8b9bf5-4392-4174-85e3-08706f622db3",
        PermissionCode.POSITION_READ_ABSOLUTE,
        "Read Absolute Positions",
        "View all positions.",
    ),
    entry(
        "e1959f5e-0199-4916-9b39-45bd5943ca1b",
        PermissionCode.POSITION_CREATE,
        "Create Position",
        "Create a position.",
    ),
    entry(
        "f9460d3d-fcd4-40d2-aabf-fa7338015ddc",
        PermissionCode.POSITION_UPDATE,
        "Update Position",
        "Modify position metadata.",
    ),
    entry(
        "c7961f7c-b864-4b12-8cf6-6c3423cff9c3",
        PermissionCode.POSITION_ARCHIVE,
        "Archive Position",
        "Archive a position.",
    ),
    entry(
        "0f7bd9ba-0de8-4376-a55e-ecd925d561af",
        PermissionCode.POSITION_RESTORE,
        "Restore Position",
        "Restore an archived position.",
    ),
    entry(
        "ca9a3e3d-b36e-4616-a5bc-185acac65e8e",
        PermissionCode.POSITION_PURGE,
        "Purge Position",
        "Permanently delete an archived position.",
    ),

    // PositionAssignment
    entry(
        "205d9f58-f67b-4b5e-987a-3be74d1d68c0",
        PermissionCode.POSITION_ASSIGNMENT_READ_COMMON,
        "Read Common Position Assignments",
        "View all position assignments within an organization realm.",
    ),
    entry(
        "73ee94f2-c501-47ee-b2a1-01031dd843e6",
        PermissionCode.POSITION_ASSIGNMENT_READ_ABSOLUTE,
        "Read Absolute Position Assignments",
        "View all position assignments.",
    ),

    // WorkCalendar
    entry(
        "7d81e52e-8dd8-4059-90fd-cc6702c0b55a",
        PermissionCode.WORK_CALENDAR_READ_COMMON,
        "Read Common Work Calendars",
        "View all work calendars within an organization realm.",
    ),
    entry(
        "ee9f5e6f-1deb-49e4-8421-5877a048bc45",
        PermissionCode.WORK_CALENDAR_READ_ABSOLUTE,
        "Read Absolute Work Calendars",
        "View all work calendars.",
    ),
    entry(
        "c9ab85f5-926b-45d3-9e63-6163c60b7cb5",
        PermissionCode.WORK_CALENDAR_CREATE,
        "Create Work Calendar",
        "Create a work calendar.",
    ),
    entry(
        "00609b64-645d-4c07-9e58-9418db285806",
        PermissionCode.WORK_CALENDAR_UPDATE,
        "Update Work Calendar",
        "Modify work calendar metadata.",
    ),
    entry(
        "415a3525-a8d2-4f17-b008-f77888f20085",
        PermissionCode.WORK_CALENDAR_ARCHIVE,
        "Archive Work Calendar",
        "Archive a work calendar.",
    ),
    entry(
        "c5938079-f7f0-423c-b574-5aac3a62152c",
        PermissionCode.WORK_CALENDAR_RESTORE,
        "Restore Work Calendar",
        "Restore an archived work calendar.",
    ),
    entry(
        "83bc7534-4001-4326-8cda-c17529a6dbdf",
        PermissionCode.WORK_CALENDAR_PURGE,
        "Purge Work Calendar",
        "Permanently delete an archived work calendar.",
    ),

    // WorkCalendarException
    entry(
        "940ffa6d-c894-49a4-9a1b-38ce1aa87332",
        PermissionCode.WORK_CALENDAR_EXCEPTION_READ_COMMON,
        "Read Common Work Calendar Exceptions",
        "View all work calendar exceptions within an organization realm.",
    ),
    entry(
        "41575c93-4909-4903-8b3a-a58be7196bd1",
        PermissionCode.WORK_CALENDAR_EXCEPTION_READ_ABSOLUTE,
        "Read Absolute Work Calendar Exceptions",
        "View all work calendar exceptions.",
    ),
    entry(
        "97bce2fa-9ca6-4292-ac71-e9512953cf1d",
        PermissionCode.WORK_CALENDAR_EXCEPTION_CREATE,
        "Create Work Calendar Exception",
        "Create a work calendar exception.",
    ),
    entry(
        "74cb0ad9-73b6-45fb-b39c-a73aa7f9a9e0",
        PermissionCode.WORK_CALENDAR_EXCEPTION_UPDATE,
        "Update Work Calendar Exception",
        "Modify a work calendar exception.",
    ),
    entry(
        "47f516a1-0ff8-4118-9fbc-342d1c0825a5",
        PermissionCode.WORK_CALENDAR_EXCEPTION_PURGE,
        "Purge Work Calendar Exception",
        "Permanently delete a work calendar exception.",
    ),

    // WorkSchedule
    entry(
        "4f0231ba-e4c4-431e-9e65-95c8cdee4a2d",
        PermissionCode.WORK_SCHEDULE_READ_COMMON,
        "Read Common Work Schedules",
        "View all work schedules within an organization realm.",
    ),
    entry(
        "4cf6e11c-cecc-40b7-89b7-6fcf454bea27",
        PermissionCode.WORK_SCHEDULE_READ_ABSOLUTE,
        "Read Absolute Work Schedules",
        "View all work schedules.",
    ),
    entry(
        "c8120f65-ffce-4636-8eb7-56a870dcec0a",
        PermissionCode.WORK_SCHEDULE_CREATE,
        "Create Work Schedule",
        "Create a work schedule.",
    ),
    entry(
        "e974aab4-41a5-432e-93d8-a1e2389746a7",
        PermissionCode.WORK_SCHEDULE_CREATE_REVISION,
        "Create Work Schedule Revision",
        "Create a revision of a work schedule.",
    ),
    entry(
        "d5e36043-1298-427f-85df-1e9e5820a513",
        PermissionCode.WORK_SCHEDULE_ARCHIVE,
        "Archive Work Schedule",
        "Archive a work schedule.",
    ),
    entry(
        "01ea0a8d-3293-432d-b7f6-4e500ceb5040",
        PermissionCode.WORK_SCHEDULE_RESTORE,
        "Restore Work Schedule",
        "Restore an archived work schedule.",
    ),
    entry(
        "a14d308b-6109-45e0-8aff-a4a2883eeb47",
        PermissionCode.WORK_SCHEDULE_PURGE,
        "Purge Work Schedule",
        "Permanently delete an archived work schedule.",
    ),


    // ---------------------------------------------------------------------------
    // Notification
    // ---------------------------------------------------------------------------

    // Recipient
    entry(
        "40aad935-2960-478f-ba94-6a6ed44944b0",
        PermissionCode.RECIPIENT_READ_PERSONAL,
        "Read Personal Recipient",
        "View your own notification recipient profile.",
    ),
    entry(
        "f1856d40-f8ab-4ac1-b33f-8551a349f84a",
        PermissionCode.RECIPIENT_READ_ABSOLUTE,
        "Read Absolute Recipient",
        "View the notification recipient profile of any account.",
    ),
    entry(
        "028fd592-e432-4735-ac94-f45cd92ee9c8",
        PermissionCode.RECIPIENT_UPDATE,
        "Update Recipient",
        "Update your own notification recipient profile.",
    ),
    entry(
        "d106502e-2dcd-4b53-9a43-7f9527636684",
        PermissionCode.RECIPIENT_SELECT_OTP_CHANNEL,
        "Select OTP Channel",
        "Select which of your verified channels receives OTP codes.",
    ),

    // Channel
    entry(
        "88a7a0fe-d27a-47df-9f13-f471994344a1",
        PermissionCode.CHANNEL_READ_PERSONAL,
        "Read Personal Channels",
        "View your own notification channels.",
    ),
    entry(
        "94987b82-9f3e-4165-b5d7-98a5d512ec99",
        PermissionCode.CHANNEL_READ_ABSOLUTE,
        "Read Absolute Channels",
        "View notification channels of any account.",
    ),
    entry(
        "3c38aebf-458a-47e5-bb5b-4bde65057ec3",
        PermissionCode.CHANNEL_TOGGLE_SOUND,
        "Toggle Channel Sound",
        "Toggle sound for your in-app notification channel.",
    ),

    // Notification
    entry(
        "8fcb9ec1-c161-440f-9b28-76f630ec4c12",
        PermissionCode.NOTIFICATION_READ_PERSONAL,
        "Read Personal Notifications",
        "View your own notifications.",
    ),
    entry(
        "239e6bdc-c944-4cd4-ab35-6c67f69bf874",
        PermissionCode.NOTIFICATION_READ_ABSOLUTE,
        "Read Absolute Notifications",
        "View notifications of any account.",
    ),

    // Message
    entry(
        "ceb37093-b3e2-49ed-af88-1b906989b19f",
        PermissionCode.MESSAGE_READ_PERSONAL,
        "Read Personal Messages",
        "View delivery status of your own notification messages.",
    ),
    entry(
        "9335ba75-e50e-4319-aaf5-c12ab69db0bf",
        PermissionCode.MESSAGE_READ_ABSOLUTE,
        "Read Absolute Messages",
        "View delivery status of notification messages of any account.",
    ),
    entry(
        "073dced1-74dd-4374-9d5c-84dfbaba468d",
        PermissionCode.MESSAGE_MARK_READ,
        "Mark Message Read",
        "Mark your own in-app notification message as read.",
    ),

    // Preference
    entry(
        "197dc100-7b55-4813-9fa4-34f532e55834",
        PermissionCode.PREFERENCE_READ_PERSONAL,
        "Read Personal Preferences",
        "View your own notification duplication preferences.",
    ),
    entry(
        "0752b749-5168-4121-ab96-bc991ab487a9",
        PermissionCode.PREFERENCE_READ_ABSOLUTE,
        "Read Absolute Preferences",
        "View notification duplication preferences of any account.",
    ),
    entry(
        "b5d5e5d7-9e0d-4b61-8e71-cbe7e10d87f4",
        PermissionCode.PREFERENCE_TOGGLE,
        "Toggle Preference",
        "Toggle notification duplication for a channel and category.",
    ),
];

export const Permissions = {
    postgresql: dataset,
    name: "permission",
    redis: dataset,
}
