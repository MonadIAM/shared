import { dataset as identity } from "./identity";
import { dataset as organization } from "./organization";
import { dataset as hr } from "./hr";
import { dataset as accesscontrol } from "./access-control";
import { dataset as notification } from "./notification";

export const system = { identity, organization, hr, "access-control": accesscontrol, notification };
