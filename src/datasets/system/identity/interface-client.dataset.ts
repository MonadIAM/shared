import { TokenGrantType } from "../../../enums";
import { SYSTEM_REALM_ID } from "../../../constants";

const CREATED_AT = new Date("2026-01-01T00:00:00.000Z");

const GRANT_TYPES = `{${TokenGrantType.AUTHORIZATION_CODE},${TokenGrantType.REFRESH_TOKEN}}`;
const DOCS_AUTH_PATH = "/docs/#identity/tag/authn/POST/api/v1/authn/password";
const WEB_REDIRECT_URIS: string[] = JSON.parse(process.env.WEB_OAUTH_REDIRECT_URIS!);
const DOCS_REDIRECT_URIS: string[] = JSON.parse(process.env.DOCS_OAUTH_REDIRECT_URIS!);

export const WEB_INTERFACE_CLIENT_ID = "00000003-0000-4000-8000-130000000001";
export const DOCS_INTERFACE_CLIENT_ID = "00000003-0000-4000-8000-130000000002";

const dataset = [
    {
        id: WEB_INTERFACE_CLIENT_ID,
        realm: SYSTEM_REALM_ID,
        name: "MonadIAM Web App",
        description: "Web application client.",
        auth_address: process.env.WEB_OAUTH_AUTH_ADDRESS!,
        redirect_uris: `{${WEB_REDIRECT_URIS.map((url) => JSON.stringify(url)).join(",")}}`,
        grant_types: GRANT_TYPES,
        realm_version: 0,
        is_system_managed: true,
        is_realm_revoked: false,
        is_revoked: false,
        created_at: CREATED_AT,
        updated_at: null,
        version: 1,
    },
    {
        id: DOCS_INTERFACE_CLIENT_ID,
        realm: SYSTEM_REALM_ID,
        name: "MonadIAM API Docs",
        description: "API reference client shared by the per-service Scalar pages.",
        auth_address: new URL(DOCS_AUTH_PATH, process.env.IDENTITY_SERVICE_URL!).href,
        redirect_uris: `{${DOCS_REDIRECT_URIS.map((url) => JSON.stringify(url)).join(",")}}`,
        grant_types: GRANT_TYPES,
        realm_version: 0,
        is_system_managed: true,
        is_realm_revoked: false,
        is_revoked: false,
        created_at: CREATED_AT,
        updated_at: null,
        version: 1,
    },
];

export const InterfaceClients = {
    name: "interface_client",
    postgresql: dataset,
};
