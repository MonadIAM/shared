import { Realms } from "./realm.dataset";
import { Permissions } from "./permission.dataset";
import { Roles } from "./role.dataset";
import { RoleClosures } from "./role-closure.dataset";
import { RolePermissionAssignments } from "./role-permission-assignment.dataset";
import { AccountRoleAssignments } from "./account-role-assignment.dataset";
import { PermissionOverrides } from "./permission-override.dataset";
import { RoleDelegationPolicies } from "./role-delegation-policy.dataset";
import { RoleConflictGroups } from "./role-conflict-group.dataset";
import { RoleConflictMembers } from "./role-conflict-member.dataset";

export const dataset = {
    Realms,
    Permissions,
    Roles,
    RoleClosures,
    RolePermissionAssignments,
    AccountRoleAssignments,
    PermissionOverrides,
    RoleDelegationPolicies,
    RoleConflictGroups,
    RoleConflictMembers,
};
