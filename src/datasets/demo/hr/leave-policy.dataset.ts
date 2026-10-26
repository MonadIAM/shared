const dataset = [
    {
        id: "e481ed66-66d0-5649-9bd2-ce90114b0655",
        organization_id: "727b53df-bf8b-5434-aa84-6870a620d239",
        code: "COMPANY-LEAVE",
        name: "Company demonstration leave policy",
        jurisdiction: "DEMO",
        revision: 1,
        status: "ACTIVE",
        rules: '[{"poolCode":"annual","unit":"DAY","annualEntitlement":"28","accrualBasis":"NONE","dayCounting":"CALENDAR_DAYS","availability":"BALANCE","expiration":null}]',
        created_at: new Date("2025-06-12T09:00:00.000Z"),
        updated_at: null,
        version: 1,
    },
    {
        id: "04b891f9-e134-5b22-b193-8a30882dc7c5",
        organization_id: "b73d2bb5-706b-5f0e-8118-29ed2d680e5d",
        code: "COMPANY-LEAVE",
        name: "Company demonstration leave policy",
        jurisdiction: "DEMO",
        revision: 1,
        status: "ACTIVE",
        rules: '[{"poolCode":"annual","unit":"DAY","annualEntitlement":"28","accrualBasis":"NONE","dayCounting":"CALENDAR_DAYS","availability":"BALANCE","expiration":null}]',
        created_at: new Date("2025-06-12T09:00:00.000Z"),
        updated_at: null,
        version: 1,
    },
];

export const LeavePolicies = {
    name: "leave_policy",
    postgresql: dataset,
};
