const dataset = [
    // Управление и PMO -> Управление и PMO
    {
        organization_id: "727b53df-bf8b-5434-aa84-6870a620d239",
        ancestor_id: "2a94dac8-d9c7-589e-b891-4878ad0e92fd",
        descendant_id: "2a94dac8-d9c7-589e-b891-4878ad0e92fd",
        depth: 0,
    },
    // Разработка -> Разработка
    {
        organization_id: "727b53df-bf8b-5434-aa84-6870a620d239",
        ancestor_id: "475dc7bf-84bb-50dd-812e-7eff0c48a503",
        descendant_id: "475dc7bf-84bb-50dd-812e-7eff0c48a503",
        depth: 0,
    },
    // Продукт и дизайн -> Продукт и дизайн
    {
        organization_id: "727b53df-bf8b-5434-aa84-6870a620d239",
        ancestor_id: "ed4d5cd8-afd6-5e1e-9ebe-adf55cdc73b2",
        descendant_id: "ed4d5cd8-afd6-5e1e-9ebe-adf55cdc73b2",
        depth: 0,
    },
    // Инфраструктура и внутренний IT -> Инфраструктура и внутренний IT
    {
        organization_id: "727b53df-bf8b-5434-aa84-6870a620d239",
        ancestor_id: "1a75622c-f729-5d44-b0c4-180d3888f6e2",
        descendant_id: "1a75622c-f729-5d44-b0c4-180d3888f6e2",
        depth: 0,
    },
    // Безопасность и контроль -> Безопасность и контроль
    {
        organization_id: "727b53df-bf8b-5434-aa84-6870a620d239",
        ancestor_id: "133bb201-1eb1-5961-a986-5da5eba2c2f7",
        descendant_id: "133bb201-1eb1-5961-a986-5da5eba2c2f7",
        depth: 0,
    },
    // Продажи и маркетинг -> Продажи и маркетинг
    {
        organization_id: "727b53df-bf8b-5434-aa84-6870a620d239",
        ancestor_id: "2b25eca2-9e6f-5e94-a7ec-e25e92ed3b0f",
        descendant_id: "2b25eca2-9e6f-5e94-a7ec-e25e92ed3b0f",
        depth: 0,
    },
    // Клиентский сервис -> Клиентский сервис
    {
        organization_id: "727b53df-bf8b-5434-aa84-6870a620d239",
        ancestor_id: "14445992-c5c3-554d-a10d-3f2d24dec1ce",
        descendant_id: "14445992-c5c3-554d-a10d-3f2d24dec1ce",
        depth: 0,
    },
    // Люди и культура -> Люди и культура
    {
        organization_id: "727b53df-bf8b-5434-aa84-6870a620d239",
        ancestor_id: "8c7941b3-127a-5b60-b96c-e85b2e3ddfff",
        descendant_id: "8c7941b3-127a-5b60-b96c-e85b2e3ddfff",
        depth: 0,
    },
    // Финансы, право и закупки -> Финансы, право и закупки
    {
        organization_id: "727b53df-bf8b-5434-aa84-6870a620d239",
        ancestor_id: "f639544d-6531-5153-bfd2-4fe1601d0412",
        descendant_id: "f639544d-6531-5153-bfd2-4fe1601d0412",
        depth: 0,
    },
    // Integration Services -> Integration Services
    {
        organization_id: "b73d2bb5-706b-5f0e-8118-29ed2d680e5d",
        ancestor_id: "339d50dc-8934-5997-9e92-aa8e1bcf96db",
        descendant_id: "339d50dc-8934-5997-9e92-aa8e1bcf96db",
        depth: 0,
    },
];

export const DepartmentClosures = {
    name: "department_closure",
    postgresql: dataset,
};
