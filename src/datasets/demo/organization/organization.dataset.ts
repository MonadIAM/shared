const dataset = [
    {
        id: "727b53df-bf8b-5434-aa84-6870a620d239",
        realm_id: "2fd2dfdd-8df2-5ad6-83a3-cc2333888f28",
        owner_id: "0c20e122-4645-52a9-92ed-5475a6134a63",
        title: "Nimbus Systems",
        description: "B2B workspace and integration platform; product, engineering and customer operations.",
        status: "ACTIVE",
        bootstrap_pending: "[]",
        pending_owner: null,
        process: null,
        revoked_at: null,
        created_at: new Date("2025-06-12T09:00:00.000Z"),
        updated_at: null,
        version: 1,
    },
    {
        id: "b73d2bb5-706b-5f0e-8118-29ed2d680e5d",
        realm_id: "0a583c93-bbc0-5af6-978d-4b8000fa72be",
        owner_id: "4b1cf06f-2e5d-51c6-81b4-7403c13cc25c",
        title: "Orbit Integration",
        description:
            "Independent integration consultancy implementing Nimbus for retail and professional services clients.",
        status: "ACTIVE",
        bootstrap_pending: "[]",
        pending_owner: null,
        process: null,
        revoked_at: null,
        created_at: new Date("2025-06-12T09:00:00.000Z"),
        updated_at: null,
        version: 1,
    },
];

export const Organizations = {
    name: "organization",
    postgresql: dataset,
};
