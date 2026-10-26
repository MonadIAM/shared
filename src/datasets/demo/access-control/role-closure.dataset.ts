const dataset = [
    // System -> System
    {
        realm_id: "00000001-0000-4000-8000-100000000001",
        ancestor_id: "00000002-0000-4000-8000-100000000001",
        descendant_id: "00000002-0000-4000-8000-100000000001",
        depth: 0,
    },
    // User -> User
    {
        realm_id: "00000001-0000-4000-8000-100000000001",
        ancestor_id: "00000002-0000-4000-8000-100000000002",
        descendant_id: "00000002-0000-4000-8000-100000000002",
        depth: 0,
    },
    // System -> User
    {
        realm_id: "00000001-0000-4000-8000-100000000001",
        ancestor_id: "00000002-0000-4000-8000-100000000001",
        descendant_id: "00000002-0000-4000-8000-100000000002",
        depth: 1,
    },
    // Administrator -> Administrator
    {
        realm_id: "00000001-0000-4000-8000-100000000001",
        ancestor_id: "00000002-0000-4000-8000-100000000003",
        descendant_id: "00000002-0000-4000-8000-100000000003",
        depth: 0,
    },
    // System -> Administrator
    {
        realm_id: "00000001-0000-4000-8000-100000000001",
        ancestor_id: "00000002-0000-4000-8000-100000000001",
        descendant_id: "00000002-0000-4000-8000-100000000003",
        depth: 1,
    },
    // root -> root
    {
        realm_id: "2fd2dfdd-8df2-5ad6-83a3-cc2333888f28",
        ancestor_id: "c3619475-8d15-5549-a263-2678f183f5aa",
        descendant_id: "c3619475-8d15-5549-a263-2678f183f5aa",
        depth: 0,
    },
    // user -> user
    {
        realm_id: "2fd2dfdd-8df2-5ad6-83a3-cc2333888f28",
        ancestor_id: "7dd69c15-607e-5a10-832b-e3858e73bb8d",
        descendant_id: "7dd69c15-607e-5a10-832b-e3858e73bb8d",
        depth: 0,
    },
    // root -> user
    {
        realm_id: "2fd2dfdd-8df2-5ad6-83a3-cc2333888f28",
        ancestor_id: "c3619475-8d15-5549-a263-2678f183f5aa",
        descendant_id: "7dd69c15-607e-5a10-832b-e3858e73bb8d",
        depth: 1,
    },
    // administrator -> administrator
    {
        realm_id: "2fd2dfdd-8df2-5ad6-83a3-cc2333888f28",
        ancestor_id: "87194886-cbb0-5eaf-b433-b832ee694c7f",
        descendant_id: "87194886-cbb0-5eaf-b433-b832ee694c7f",
        depth: 0,
    },
    // root -> administrator
    {
        realm_id: "2fd2dfdd-8df2-5ad6-83a3-cc2333888f28",
        ancestor_id: "c3619475-8d15-5549-a263-2678f183f5aa",
        descendant_id: "87194886-cbb0-5eaf-b433-b832ee694c7f",
        depth: 1,
    },
    // directory-reader -> directory-reader
    {
        realm_id: "2fd2dfdd-8df2-5ad6-83a3-cc2333888f28",
        ancestor_id: "781dcd04-e57f-5c41-b0dc-e3b5cdad566e",
        descendant_id: "781dcd04-e57f-5c41-b0dc-e3b5cdad566e",
        depth: 0,
    },
    // root -> directory-reader
    {
        realm_id: "2fd2dfdd-8df2-5ad6-83a3-cc2333888f28",
        ancestor_id: "c3619475-8d15-5549-a263-2678f183f5aa",
        descendant_id: "781dcd04-e57f-5c41-b0dc-e3b5cdad566e",
        depth: 1,
    },
    // people-operator -> people-operator
    {
        realm_id: "2fd2dfdd-8df2-5ad6-83a3-cc2333888f28",
        ancestor_id: "55d7a15b-3536-50d2-ba80-a2675b9e86c7",
        descendant_id: "55d7a15b-3536-50d2-ba80-a2675b9e86c7",
        depth: 0,
    },
    // root -> people-operator
    {
        realm_id: "2fd2dfdd-8df2-5ad6-83a3-cc2333888f28",
        ancestor_id: "c3619475-8d15-5549-a263-2678f183f5aa",
        descendant_id: "55d7a15b-3536-50d2-ba80-a2675b9e86c7",
        depth: 1,
    },
    // security-responder -> security-responder
    {
        realm_id: "2fd2dfdd-8df2-5ad6-83a3-cc2333888f28",
        ancestor_id: "6caba33f-6a5c-5b5d-b358-b4f6988f7292",
        descendant_id: "6caba33f-6a5c-5b5d-b358-b4f6988f7292",
        depth: 0,
    },
    // root -> security-responder
    {
        realm_id: "2fd2dfdd-8df2-5ad6-83a3-cc2333888f28",
        ancestor_id: "c3619475-8d15-5549-a263-2678f183f5aa",
        descendant_id: "6caba33f-6a5c-5b5d-b358-b4f6988f7292",
        depth: 1,
    },
    // access-auditor -> access-auditor
    {
        realm_id: "2fd2dfdd-8df2-5ad6-83a3-cc2333888f28",
        ancestor_id: "da7fbc03-60cf-585d-95df-b5fed427229c",
        descendant_id: "da7fbc03-60cf-585d-95df-b5fed427229c",
        depth: 0,
    },
    // root -> access-auditor
    {
        realm_id: "2fd2dfdd-8df2-5ad6-83a3-cc2333888f28",
        ancestor_id: "c3619475-8d15-5549-a263-2678f183f5aa",
        descendant_id: "da7fbc03-60cf-585d-95df-b5fed427229c",
        depth: 1,
    },
    // access-operator -> access-operator
    {
        realm_id: "2fd2dfdd-8df2-5ad6-83a3-cc2333888f28",
        ancestor_id: "8aeee038-82b0-521a-acc1-55c283668dab",
        descendant_id: "8aeee038-82b0-521a-acc1-55c283668dab",
        depth: 0,
    },
    // root -> access-operator
    {
        realm_id: "2fd2dfdd-8df2-5ad6-83a3-cc2333888f28",
        ancestor_id: "c3619475-8d15-5549-a263-2678f183f5aa",
        descendant_id: "8aeee038-82b0-521a-acc1-55c283668dab",
        depth: 1,
    },
    // project-coordinator -> project-coordinator
    {
        realm_id: "2fd2dfdd-8df2-5ad6-83a3-cc2333888f28",
        ancestor_id: "3abba343-0053-53c0-8758-6d7860975bd9",
        descendant_id: "3abba343-0053-53c0-8758-6d7860975bd9",
        depth: 0,
    },
    // root -> project-coordinator
    {
        realm_id: "2fd2dfdd-8df2-5ad6-83a3-cc2333888f28",
        ancestor_id: "c3619475-8d15-5549-a263-2678f183f5aa",
        descendant_id: "3abba343-0053-53c0-8758-6d7860975bd9",
        depth: 1,
    },
    // notification-reader -> notification-reader
    {
        realm_id: "2fd2dfdd-8df2-5ad6-83a3-cc2333888f28",
        ancestor_id: "fb3d47ea-72bc-5734-b557-f4eea14a4db1",
        descendant_id: "fb3d47ea-72bc-5734-b557-f4eea14a4db1",
        depth: 0,
    },
    // root -> notification-reader
    {
        realm_id: "2fd2dfdd-8df2-5ad6-83a3-cc2333888f28",
        ancestor_id: "c3619475-8d15-5549-a263-2678f183f5aa",
        descendant_id: "fb3d47ea-72bc-5734-b557-f4eea14a4db1",
        depth: 1,
    },
    // root -> root
    {
        realm_id: "0a583c93-bbc0-5af6-978d-4b8000fa72be",
        ancestor_id: "6dcdec22-c501-5879-8c19-759cc93b7d55",
        descendant_id: "6dcdec22-c501-5879-8c19-759cc93b7d55",
        depth: 0,
    },
    // user -> user
    {
        realm_id: "0a583c93-bbc0-5af6-978d-4b8000fa72be",
        ancestor_id: "1477b98f-8e83-5292-b58d-eb2a0e874894",
        descendant_id: "1477b98f-8e83-5292-b58d-eb2a0e874894",
        depth: 0,
    },
    // root -> user
    {
        realm_id: "0a583c93-bbc0-5af6-978d-4b8000fa72be",
        ancestor_id: "6dcdec22-c501-5879-8c19-759cc93b7d55",
        descendant_id: "1477b98f-8e83-5292-b58d-eb2a0e874894",
        depth: 1,
    },
    // administrator -> administrator
    {
        realm_id: "0a583c93-bbc0-5af6-978d-4b8000fa72be",
        ancestor_id: "c3d21edb-765a-5b50-8d3e-d785207b2643",
        descendant_id: "c3d21edb-765a-5b50-8d3e-d785207b2643",
        depth: 0,
    },
    // root -> administrator
    {
        realm_id: "0a583c93-bbc0-5af6-978d-4b8000fa72be",
        ancestor_id: "6dcdec22-c501-5879-8c19-759cc93b7d55",
        descendant_id: "c3d21edb-765a-5b50-8d3e-d785207b2643",
        depth: 1,
    },
    // directory-reader -> directory-reader
    {
        realm_id: "0a583c93-bbc0-5af6-978d-4b8000fa72be",
        ancestor_id: "a3ddcdc3-8574-575e-b437-04d1e3ce0e3b",
        descendant_id: "a3ddcdc3-8574-575e-b437-04d1e3ce0e3b",
        depth: 0,
    },
    // root -> directory-reader
    {
        realm_id: "0a583c93-bbc0-5af6-978d-4b8000fa72be",
        ancestor_id: "6dcdec22-c501-5879-8c19-759cc93b7d55",
        descendant_id: "a3ddcdc3-8574-575e-b437-04d1e3ce0e3b",
        depth: 1,
    },
    // people-operator -> people-operator
    {
        realm_id: "0a583c93-bbc0-5af6-978d-4b8000fa72be",
        ancestor_id: "36be95f8-d94d-5732-bd4b-7e58e7ffaf5e",
        descendant_id: "36be95f8-d94d-5732-bd4b-7e58e7ffaf5e",
        depth: 0,
    },
    // root -> people-operator
    {
        realm_id: "0a583c93-bbc0-5af6-978d-4b8000fa72be",
        ancestor_id: "6dcdec22-c501-5879-8c19-759cc93b7d55",
        descendant_id: "36be95f8-d94d-5732-bd4b-7e58e7ffaf5e",
        depth: 1,
    },
    // security-responder -> security-responder
    {
        realm_id: "0a583c93-bbc0-5af6-978d-4b8000fa72be",
        ancestor_id: "5c807134-42c9-5bef-9805-5d7090bccc09",
        descendant_id: "5c807134-42c9-5bef-9805-5d7090bccc09",
        depth: 0,
    },
    // root -> security-responder
    {
        realm_id: "0a583c93-bbc0-5af6-978d-4b8000fa72be",
        ancestor_id: "6dcdec22-c501-5879-8c19-759cc93b7d55",
        descendant_id: "5c807134-42c9-5bef-9805-5d7090bccc09",
        depth: 1,
    },
    // access-auditor -> access-auditor
    {
        realm_id: "0a583c93-bbc0-5af6-978d-4b8000fa72be",
        ancestor_id: "31f4713a-4d38-54e0-a3a7-8b88859ce301",
        descendant_id: "31f4713a-4d38-54e0-a3a7-8b88859ce301",
        depth: 0,
    },
    // root -> access-auditor
    {
        realm_id: "0a583c93-bbc0-5af6-978d-4b8000fa72be",
        ancestor_id: "6dcdec22-c501-5879-8c19-759cc93b7d55",
        descendant_id: "31f4713a-4d38-54e0-a3a7-8b88859ce301",
        depth: 1,
    },
    // access-operator -> access-operator
    {
        realm_id: "0a583c93-bbc0-5af6-978d-4b8000fa72be",
        ancestor_id: "627f335e-8652-5ff0-a1f8-3b195f7a2c96",
        descendant_id: "627f335e-8652-5ff0-a1f8-3b195f7a2c96",
        depth: 0,
    },
    // root -> access-operator
    {
        realm_id: "0a583c93-bbc0-5af6-978d-4b8000fa72be",
        ancestor_id: "6dcdec22-c501-5879-8c19-759cc93b7d55",
        descendant_id: "627f335e-8652-5ff0-a1f8-3b195f7a2c96",
        depth: 1,
    },
    // project-coordinator -> project-coordinator
    {
        realm_id: "0a583c93-bbc0-5af6-978d-4b8000fa72be",
        ancestor_id: "aacbe944-7a1c-5c43-92b1-6076e551d2d7",
        descendant_id: "aacbe944-7a1c-5c43-92b1-6076e551d2d7",
        depth: 0,
    },
    // root -> project-coordinator
    {
        realm_id: "0a583c93-bbc0-5af6-978d-4b8000fa72be",
        ancestor_id: "6dcdec22-c501-5879-8c19-759cc93b7d55",
        descendant_id: "aacbe944-7a1c-5c43-92b1-6076e551d2d7",
        depth: 1,
    },
    // notification-reader -> notification-reader
    {
        realm_id: "0a583c93-bbc0-5af6-978d-4b8000fa72be",
        ancestor_id: "9dd2a7c0-ab6f-591a-b634-5ce2abad46a8",
        descendant_id: "9dd2a7c0-ab6f-591a-b634-5ce2abad46a8",
        depth: 0,
    },
    // root -> notification-reader
    {
        realm_id: "0a583c93-bbc0-5af6-978d-4b8000fa72be",
        ancestor_id: "6dcdec22-c501-5879-8c19-759cc93b7d55",
        descendant_id: "9dd2a7c0-ab6f-591a-b634-5ce2abad46a8",
        depth: 1,
    },
    // root -> root
    {
        realm_id: "35fd0c1d-e3ef-5471-9ba8-9e8cf02cb655",
        ancestor_id: "ec51cede-21b2-57d0-bf39-a258f6699e9f",
        descendant_id: "ec51cede-21b2-57d0-bf39-a258f6699e9f",
        depth: 0,
    },
    // user -> user
    {
        realm_id: "35fd0c1d-e3ef-5471-9ba8-9e8cf02cb655",
        ancestor_id: "65570110-6bca-5c8b-b000-89f07f0659d6",
        descendant_id: "65570110-6bca-5c8b-b000-89f07f0659d6",
        depth: 0,
    },
    // root -> user
    {
        realm_id: "35fd0c1d-e3ef-5471-9ba8-9e8cf02cb655",
        ancestor_id: "ec51cede-21b2-57d0-bf39-a258f6699e9f",
        descendant_id: "65570110-6bca-5c8b-b000-89f07f0659d6",
        depth: 1,
    },
    // administrator -> administrator
    {
        realm_id: "35fd0c1d-e3ef-5471-9ba8-9e8cf02cb655",
        ancestor_id: "1c09c3ea-cd06-503b-9ae5-4f619e6eae29",
        descendant_id: "1c09c3ea-cd06-503b-9ae5-4f619e6eae29",
        depth: 0,
    },
    // root -> administrator
    {
        realm_id: "35fd0c1d-e3ef-5471-9ba8-9e8cf02cb655",
        ancestor_id: "ec51cede-21b2-57d0-bf39-a258f6699e9f",
        descendant_id: "1c09c3ea-cd06-503b-9ae5-4f619e6eae29",
        depth: 1,
    },
    // access-auditor -> access-auditor
    {
        realm_id: "35fd0c1d-e3ef-5471-9ba8-9e8cf02cb655",
        ancestor_id: "0e40ea3c-cf7e-563c-a3c8-4d59d25f05c7",
        descendant_id: "0e40ea3c-cf7e-563c-a3c8-4d59d25f05c7",
        depth: 0,
    },
    // root -> access-auditor
    {
        realm_id: "35fd0c1d-e3ef-5471-9ba8-9e8cf02cb655",
        ancestor_id: "ec51cede-21b2-57d0-bf39-a258f6699e9f",
        descendant_id: "0e40ea3c-cf7e-563c-a3c8-4d59d25f05c7",
        depth: 1,
    },
    // access-operator -> access-operator
    {
        realm_id: "35fd0c1d-e3ef-5471-9ba8-9e8cf02cb655",
        ancestor_id: "5927d519-39bc-57ec-8e5c-2a3a1b36bfb3",
        descendant_id: "5927d519-39bc-57ec-8e5c-2a3a1b36bfb3",
        depth: 0,
    },
    // root -> access-operator
    {
        realm_id: "35fd0c1d-e3ef-5471-9ba8-9e8cf02cb655",
        ancestor_id: "ec51cede-21b2-57d0-bf39-a258f6699e9f",
        descendant_id: "5927d519-39bc-57ec-8e5c-2a3a1b36bfb3",
        depth: 1,
    },
    // project-coordinator -> project-coordinator
    {
        realm_id: "35fd0c1d-e3ef-5471-9ba8-9e8cf02cb655",
        ancestor_id: "cc686042-056e-5229-b658-b0644deb0c57",
        descendant_id: "cc686042-056e-5229-b658-b0644deb0c57",
        depth: 0,
    },
    // root -> project-coordinator
    {
        realm_id: "35fd0c1d-e3ef-5471-9ba8-9e8cf02cb655",
        ancestor_id: "ec51cede-21b2-57d0-bf39-a258f6699e9f",
        descendant_id: "cc686042-056e-5229-b658-b0644deb0c57",
        depth: 1,
    },
    // root -> root
    {
        realm_id: "3124efba-63dc-5d12-890c-3ece7a43199d",
        ancestor_id: "4402fb4c-d35e-5368-be3c-a32363a987c7",
        descendant_id: "4402fb4c-d35e-5368-be3c-a32363a987c7",
        depth: 0,
    },
    // user -> user
    {
        realm_id: "3124efba-63dc-5d12-890c-3ece7a43199d",
        ancestor_id: "67580e7b-948c-504d-b673-bbd21e081814",
        descendant_id: "67580e7b-948c-504d-b673-bbd21e081814",
        depth: 0,
    },
    // root -> user
    {
        realm_id: "3124efba-63dc-5d12-890c-3ece7a43199d",
        ancestor_id: "4402fb4c-d35e-5368-be3c-a32363a987c7",
        descendant_id: "67580e7b-948c-504d-b673-bbd21e081814",
        depth: 1,
    },
    // administrator -> administrator
    {
        realm_id: "3124efba-63dc-5d12-890c-3ece7a43199d",
        ancestor_id: "5bcd8e42-cced-524d-ac67-96dc45d5b7e4",
        descendant_id: "5bcd8e42-cced-524d-ac67-96dc45d5b7e4",
        depth: 0,
    },
    // root -> administrator
    {
        realm_id: "3124efba-63dc-5d12-890c-3ece7a43199d",
        ancestor_id: "4402fb4c-d35e-5368-be3c-a32363a987c7",
        descendant_id: "5bcd8e42-cced-524d-ac67-96dc45d5b7e4",
        depth: 1,
    },
    // access-auditor -> access-auditor
    {
        realm_id: "3124efba-63dc-5d12-890c-3ece7a43199d",
        ancestor_id: "463b6c2d-d917-5e04-bd84-58681eb76a6d",
        descendant_id: "463b6c2d-d917-5e04-bd84-58681eb76a6d",
        depth: 0,
    },
    // root -> access-auditor
    {
        realm_id: "3124efba-63dc-5d12-890c-3ece7a43199d",
        ancestor_id: "4402fb4c-d35e-5368-be3c-a32363a987c7",
        descendant_id: "463b6c2d-d917-5e04-bd84-58681eb76a6d",
        depth: 1,
    },
    // access-operator -> access-operator
    {
        realm_id: "3124efba-63dc-5d12-890c-3ece7a43199d",
        ancestor_id: "5f1140d6-1bf5-5715-8657-cbcb22e73bdf",
        descendant_id: "5f1140d6-1bf5-5715-8657-cbcb22e73bdf",
        depth: 0,
    },
    // root -> access-operator
    {
        realm_id: "3124efba-63dc-5d12-890c-3ece7a43199d",
        ancestor_id: "4402fb4c-d35e-5368-be3c-a32363a987c7",
        descendant_id: "5f1140d6-1bf5-5715-8657-cbcb22e73bdf",
        depth: 1,
    },
    // project-coordinator -> project-coordinator
    {
        realm_id: "3124efba-63dc-5d12-890c-3ece7a43199d",
        ancestor_id: "5a4515ed-e9c0-56b9-b061-caee0a74f0b7",
        descendant_id: "5a4515ed-e9c0-56b9-b061-caee0a74f0b7",
        depth: 0,
    },
    // root -> project-coordinator
    {
        realm_id: "3124efba-63dc-5d12-890c-3ece7a43199d",
        ancestor_id: "4402fb4c-d35e-5368-be3c-a32363a987c7",
        descendant_id: "5a4515ed-e9c0-56b9-b061-caee0a74f0b7",
        depth: 1,
    },
    // root -> root
    {
        realm_id: "97699786-901f-5d62-9aa3-2f11f83ffdb5",
        ancestor_id: "e9c722ba-64c2-50e8-9a23-b07bad92125a",
        descendant_id: "e9c722ba-64c2-50e8-9a23-b07bad92125a",
        depth: 0,
    },
    // user -> user
    {
        realm_id: "97699786-901f-5d62-9aa3-2f11f83ffdb5",
        ancestor_id: "2aff209d-e330-5edc-a6a9-656f4e9c3a9d",
        descendant_id: "2aff209d-e330-5edc-a6a9-656f4e9c3a9d",
        depth: 0,
    },
    // root -> user
    {
        realm_id: "97699786-901f-5d62-9aa3-2f11f83ffdb5",
        ancestor_id: "e9c722ba-64c2-50e8-9a23-b07bad92125a",
        descendant_id: "2aff209d-e330-5edc-a6a9-656f4e9c3a9d",
        depth: 1,
    },
    // administrator -> administrator
    {
        realm_id: "97699786-901f-5d62-9aa3-2f11f83ffdb5",
        ancestor_id: "3eef8576-f0a4-5c35-a05e-bc2a79511806",
        descendant_id: "3eef8576-f0a4-5c35-a05e-bc2a79511806",
        depth: 0,
    },
    // root -> administrator
    {
        realm_id: "97699786-901f-5d62-9aa3-2f11f83ffdb5",
        ancestor_id: "e9c722ba-64c2-50e8-9a23-b07bad92125a",
        descendant_id: "3eef8576-f0a4-5c35-a05e-bc2a79511806",
        depth: 1,
    },
    // access-auditor -> access-auditor
    {
        realm_id: "97699786-901f-5d62-9aa3-2f11f83ffdb5",
        ancestor_id: "9cdf44be-6a6b-5343-99c2-9e492bf9277a",
        descendant_id: "9cdf44be-6a6b-5343-99c2-9e492bf9277a",
        depth: 0,
    },
    // root -> access-auditor
    {
        realm_id: "97699786-901f-5d62-9aa3-2f11f83ffdb5",
        ancestor_id: "e9c722ba-64c2-50e8-9a23-b07bad92125a",
        descendant_id: "9cdf44be-6a6b-5343-99c2-9e492bf9277a",
        depth: 1,
    },
    // access-operator -> access-operator
    {
        realm_id: "97699786-901f-5d62-9aa3-2f11f83ffdb5",
        ancestor_id: "9627bbf9-c5c2-55dc-bc9f-33fd0e03c6b4",
        descendant_id: "9627bbf9-c5c2-55dc-bc9f-33fd0e03c6b4",
        depth: 0,
    },
    // root -> access-operator
    {
        realm_id: "97699786-901f-5d62-9aa3-2f11f83ffdb5",
        ancestor_id: "e9c722ba-64c2-50e8-9a23-b07bad92125a",
        descendant_id: "9627bbf9-c5c2-55dc-bc9f-33fd0e03c6b4",
        depth: 1,
    },
    // project-coordinator -> project-coordinator
    {
        realm_id: "97699786-901f-5d62-9aa3-2f11f83ffdb5",
        ancestor_id: "34572145-e4e5-54f7-8b0f-2303158e74cb",
        descendant_id: "34572145-e4e5-54f7-8b0f-2303158e74cb",
        depth: 0,
    },
    // root -> project-coordinator
    {
        realm_id: "97699786-901f-5d62-9aa3-2f11f83ffdb5",
        ancestor_id: "e9c722ba-64c2-50e8-9a23-b07bad92125a",
        descendant_id: "34572145-e4e5-54f7-8b0f-2303158e74cb",
        depth: 1,
    },
    // root -> root
    {
        realm_id: "34daffee-ad2b-53dc-b700-aff4114fa403",
        ancestor_id: "4b9697f8-c3de-515a-a97c-93e981b12fbc",
        descendant_id: "4b9697f8-c3de-515a-a97c-93e981b12fbc",
        depth: 0,
    },
    // user -> user
    {
        realm_id: "34daffee-ad2b-53dc-b700-aff4114fa403",
        ancestor_id: "3deb6930-97fb-5ba4-9844-7b96712de955",
        descendant_id: "3deb6930-97fb-5ba4-9844-7b96712de955",
        depth: 0,
    },
    // root -> user
    {
        realm_id: "34daffee-ad2b-53dc-b700-aff4114fa403",
        ancestor_id: "4b9697f8-c3de-515a-a97c-93e981b12fbc",
        descendant_id: "3deb6930-97fb-5ba4-9844-7b96712de955",
        depth: 1,
    },
    // administrator -> administrator
    {
        realm_id: "34daffee-ad2b-53dc-b700-aff4114fa403",
        ancestor_id: "48ce58cf-5516-5b49-9cad-84dfa19a6a98",
        descendant_id: "48ce58cf-5516-5b49-9cad-84dfa19a6a98",
        depth: 0,
    },
    // root -> administrator
    {
        realm_id: "34daffee-ad2b-53dc-b700-aff4114fa403",
        ancestor_id: "4b9697f8-c3de-515a-a97c-93e981b12fbc",
        descendant_id: "48ce58cf-5516-5b49-9cad-84dfa19a6a98",
        depth: 1,
    },
    // access-auditor -> access-auditor
    {
        realm_id: "34daffee-ad2b-53dc-b700-aff4114fa403",
        ancestor_id: "88ba4624-b21d-5131-8919-8dc074965632",
        descendant_id: "88ba4624-b21d-5131-8919-8dc074965632",
        depth: 0,
    },
    // root -> access-auditor
    {
        realm_id: "34daffee-ad2b-53dc-b700-aff4114fa403",
        ancestor_id: "4b9697f8-c3de-515a-a97c-93e981b12fbc",
        descendant_id: "88ba4624-b21d-5131-8919-8dc074965632",
        depth: 1,
    },
    // access-operator -> access-operator
    {
        realm_id: "34daffee-ad2b-53dc-b700-aff4114fa403",
        ancestor_id: "2c757c25-6e77-5606-9d5a-e6f7a24cf5d9",
        descendant_id: "2c757c25-6e77-5606-9d5a-e6f7a24cf5d9",
        depth: 0,
    },
    // root -> access-operator
    {
        realm_id: "34daffee-ad2b-53dc-b700-aff4114fa403",
        ancestor_id: "4b9697f8-c3de-515a-a97c-93e981b12fbc",
        descendant_id: "2c757c25-6e77-5606-9d5a-e6f7a24cf5d9",
        depth: 1,
    },
    // project-coordinator -> project-coordinator
    {
        realm_id: "34daffee-ad2b-53dc-b700-aff4114fa403",
        ancestor_id: "2c1d51d4-695d-5c74-9f66-25b1dbe54b39",
        descendant_id: "2c1d51d4-695d-5c74-9f66-25b1dbe54b39",
        depth: 0,
    },
    // root -> project-coordinator
    {
        realm_id: "34daffee-ad2b-53dc-b700-aff4114fa403",
        ancestor_id: "4b9697f8-c3de-515a-a97c-93e981b12fbc",
        descendant_id: "2c1d51d4-695d-5c74-9f66-25b1dbe54b39",
        depth: 1,
    },
    // root -> root
    {
        realm_id: "1a869fbf-f551-5f97-90fa-392d7591d482",
        ancestor_id: "095a0ff9-6b50-5aa4-851b-f1d8987f5b8a",
        descendant_id: "095a0ff9-6b50-5aa4-851b-f1d8987f5b8a",
        depth: 0,
    },
    // user -> user
    {
        realm_id: "1a869fbf-f551-5f97-90fa-392d7591d482",
        ancestor_id: "e73468d3-2716-5806-8f29-81126faaf59e",
        descendant_id: "e73468d3-2716-5806-8f29-81126faaf59e",
        depth: 0,
    },
    // root -> user
    {
        realm_id: "1a869fbf-f551-5f97-90fa-392d7591d482",
        ancestor_id: "095a0ff9-6b50-5aa4-851b-f1d8987f5b8a",
        descendant_id: "e73468d3-2716-5806-8f29-81126faaf59e",
        depth: 1,
    },
    // administrator -> administrator
    {
        realm_id: "1a869fbf-f551-5f97-90fa-392d7591d482",
        ancestor_id: "7aad959c-e343-5791-b8b7-196c671738d7",
        descendant_id: "7aad959c-e343-5791-b8b7-196c671738d7",
        depth: 0,
    },
    // root -> administrator
    {
        realm_id: "1a869fbf-f551-5f97-90fa-392d7591d482",
        ancestor_id: "095a0ff9-6b50-5aa4-851b-f1d8987f5b8a",
        descendant_id: "7aad959c-e343-5791-b8b7-196c671738d7",
        depth: 1,
    },
    // access-auditor -> access-auditor
    {
        realm_id: "1a869fbf-f551-5f97-90fa-392d7591d482",
        ancestor_id: "b902ba07-cbe0-531e-97f2-d5af0f5eee9e",
        descendant_id: "b902ba07-cbe0-531e-97f2-d5af0f5eee9e",
        depth: 0,
    },
    // root -> access-auditor
    {
        realm_id: "1a869fbf-f551-5f97-90fa-392d7591d482",
        ancestor_id: "095a0ff9-6b50-5aa4-851b-f1d8987f5b8a",
        descendant_id: "b902ba07-cbe0-531e-97f2-d5af0f5eee9e",
        depth: 1,
    },
    // access-operator -> access-operator
    {
        realm_id: "1a869fbf-f551-5f97-90fa-392d7591d482",
        ancestor_id: "8a193cd6-3f69-51c2-b8de-10d52afe46f8",
        descendant_id: "8a193cd6-3f69-51c2-b8de-10d52afe46f8",
        depth: 0,
    },
    // root -> access-operator
    {
        realm_id: "1a869fbf-f551-5f97-90fa-392d7591d482",
        ancestor_id: "095a0ff9-6b50-5aa4-851b-f1d8987f5b8a",
        descendant_id: "8a193cd6-3f69-51c2-b8de-10d52afe46f8",
        depth: 1,
    },
    // project-coordinator -> project-coordinator
    {
        realm_id: "1a869fbf-f551-5f97-90fa-392d7591d482",
        ancestor_id: "64e61e0c-0131-580b-a5db-d51c89264c1c",
        descendant_id: "64e61e0c-0131-580b-a5db-d51c89264c1c",
        depth: 0,
    },
    // root -> project-coordinator
    {
        realm_id: "1a869fbf-f551-5f97-90fa-392d7591d482",
        ancestor_id: "095a0ff9-6b50-5aa4-851b-f1d8987f5b8a",
        descendant_id: "64e61e0c-0131-580b-a5db-d51c89264c1c",
        depth: 1,
    },
    // root -> root
    {
        realm_id: "5b1a86ab-16b6-5f91-9930-28423456194a",
        ancestor_id: "31290a1a-ad0c-57d5-9803-4316863001b7",
        descendant_id: "31290a1a-ad0c-57d5-9803-4316863001b7",
        depth: 0,
    },
    // user -> user
    {
        realm_id: "5b1a86ab-16b6-5f91-9930-28423456194a",
        ancestor_id: "9702002a-0540-52f9-a5a4-962b92e1e9b8",
        descendant_id: "9702002a-0540-52f9-a5a4-962b92e1e9b8",
        depth: 0,
    },
    // root -> user
    {
        realm_id: "5b1a86ab-16b6-5f91-9930-28423456194a",
        ancestor_id: "31290a1a-ad0c-57d5-9803-4316863001b7",
        descendant_id: "9702002a-0540-52f9-a5a4-962b92e1e9b8",
        depth: 1,
    },
    // administrator -> administrator
    {
        realm_id: "5b1a86ab-16b6-5f91-9930-28423456194a",
        ancestor_id: "2604d11f-a369-533c-84b3-fbf6f9daa4e8",
        descendant_id: "2604d11f-a369-533c-84b3-fbf6f9daa4e8",
        depth: 0,
    },
    // root -> administrator
    {
        realm_id: "5b1a86ab-16b6-5f91-9930-28423456194a",
        ancestor_id: "31290a1a-ad0c-57d5-9803-4316863001b7",
        descendant_id: "2604d11f-a369-533c-84b3-fbf6f9daa4e8",
        depth: 1,
    },
    // access-auditor -> access-auditor
    {
        realm_id: "5b1a86ab-16b6-5f91-9930-28423456194a",
        ancestor_id: "beba5ab9-5bd5-587e-8be4-f3b0fbf432b4",
        descendant_id: "beba5ab9-5bd5-587e-8be4-f3b0fbf432b4",
        depth: 0,
    },
    // root -> access-auditor
    {
        realm_id: "5b1a86ab-16b6-5f91-9930-28423456194a",
        ancestor_id: "31290a1a-ad0c-57d5-9803-4316863001b7",
        descendant_id: "beba5ab9-5bd5-587e-8be4-f3b0fbf432b4",
        depth: 1,
    },
    // access-operator -> access-operator
    {
        realm_id: "5b1a86ab-16b6-5f91-9930-28423456194a",
        ancestor_id: "8d4a5546-de28-5e04-b4f9-8351cbd5e8f2",
        descendant_id: "8d4a5546-de28-5e04-b4f9-8351cbd5e8f2",
        depth: 0,
    },
    // root -> access-operator
    {
        realm_id: "5b1a86ab-16b6-5f91-9930-28423456194a",
        ancestor_id: "31290a1a-ad0c-57d5-9803-4316863001b7",
        descendant_id: "8d4a5546-de28-5e04-b4f9-8351cbd5e8f2",
        depth: 1,
    },
    // project-coordinator -> project-coordinator
    {
        realm_id: "5b1a86ab-16b6-5f91-9930-28423456194a",
        ancestor_id: "47fd5786-ba19-5a2e-8ef3-d253b761a53e",
        descendant_id: "47fd5786-ba19-5a2e-8ef3-d253b761a53e",
        depth: 0,
    },
    // root -> project-coordinator
    {
        realm_id: "5b1a86ab-16b6-5f91-9930-28423456194a",
        ancestor_id: "31290a1a-ad0c-57d5-9803-4316863001b7",
        descendant_id: "47fd5786-ba19-5a2e-8ef3-d253b761a53e",
        depth: 1,
    },
    // root -> root
    {
        realm_id: "7af38057-b653-5ecb-845b-82a315a8acc4",
        ancestor_id: "33d4bdec-fa6c-572a-bed7-73ec9d21eb4b",
        descendant_id: "33d4bdec-fa6c-572a-bed7-73ec9d21eb4b",
        depth: 0,
    },
    // user -> user
    {
        realm_id: "7af38057-b653-5ecb-845b-82a315a8acc4",
        ancestor_id: "c008af08-8380-5c77-aa59-02bb143e8afb",
        descendant_id: "c008af08-8380-5c77-aa59-02bb143e8afb",
        depth: 0,
    },
    // root -> user
    {
        realm_id: "7af38057-b653-5ecb-845b-82a315a8acc4",
        ancestor_id: "33d4bdec-fa6c-572a-bed7-73ec9d21eb4b",
        descendant_id: "c008af08-8380-5c77-aa59-02bb143e8afb",
        depth: 1,
    },
    // administrator -> administrator
    {
        realm_id: "7af38057-b653-5ecb-845b-82a315a8acc4",
        ancestor_id: "838096f3-5c1d-5eba-8270-2a57757ad9b4",
        descendant_id: "838096f3-5c1d-5eba-8270-2a57757ad9b4",
        depth: 0,
    },
    // root -> administrator
    {
        realm_id: "7af38057-b653-5ecb-845b-82a315a8acc4",
        ancestor_id: "33d4bdec-fa6c-572a-bed7-73ec9d21eb4b",
        descendant_id: "838096f3-5c1d-5eba-8270-2a57757ad9b4",
        depth: 1,
    },
    // access-auditor -> access-auditor
    {
        realm_id: "7af38057-b653-5ecb-845b-82a315a8acc4",
        ancestor_id: "453c7652-e1e9-5302-8f1e-cd930402ae11",
        descendant_id: "453c7652-e1e9-5302-8f1e-cd930402ae11",
        depth: 0,
    },
    // root -> access-auditor
    {
        realm_id: "7af38057-b653-5ecb-845b-82a315a8acc4",
        ancestor_id: "33d4bdec-fa6c-572a-bed7-73ec9d21eb4b",
        descendant_id: "453c7652-e1e9-5302-8f1e-cd930402ae11",
        depth: 1,
    },
    // access-operator -> access-operator
    {
        realm_id: "7af38057-b653-5ecb-845b-82a315a8acc4",
        ancestor_id: "c294e32c-3c8d-5daa-849e-c63665c579d0",
        descendant_id: "c294e32c-3c8d-5daa-849e-c63665c579d0",
        depth: 0,
    },
    // root -> access-operator
    {
        realm_id: "7af38057-b653-5ecb-845b-82a315a8acc4",
        ancestor_id: "33d4bdec-fa6c-572a-bed7-73ec9d21eb4b",
        descendant_id: "c294e32c-3c8d-5daa-849e-c63665c579d0",
        depth: 1,
    },
    // project-coordinator -> project-coordinator
    {
        realm_id: "7af38057-b653-5ecb-845b-82a315a8acc4",
        ancestor_id: "9ba4db60-c28d-5d9e-aded-3ce4693831ba",
        descendant_id: "9ba4db60-c28d-5d9e-aded-3ce4693831ba",
        depth: 0,
    },
    // root -> project-coordinator
    {
        realm_id: "7af38057-b653-5ecb-845b-82a315a8acc4",
        ancestor_id: "33d4bdec-fa6c-572a-bed7-73ec9d21eb4b",
        descendant_id: "9ba4db60-c28d-5d9e-aded-3ce4693831ba",
        depth: 1,
    },
    // root -> root
    {
        realm_id: "3c649fcf-e16c-5f63-ba12-a21b91e82a7b",
        ancestor_id: "07f78030-0988-5493-ae18-8e689d771857",
        descendant_id: "07f78030-0988-5493-ae18-8e689d771857",
        depth: 0,
    },
    // user -> user
    {
        realm_id: "3c649fcf-e16c-5f63-ba12-a21b91e82a7b",
        ancestor_id: "f0693713-73ba-5d6a-bc45-a6c915250a9f",
        descendant_id: "f0693713-73ba-5d6a-bc45-a6c915250a9f",
        depth: 0,
    },
    // root -> user
    {
        realm_id: "3c649fcf-e16c-5f63-ba12-a21b91e82a7b",
        ancestor_id: "07f78030-0988-5493-ae18-8e689d771857",
        descendant_id: "f0693713-73ba-5d6a-bc45-a6c915250a9f",
        depth: 1,
    },
    // administrator -> administrator
    {
        realm_id: "3c649fcf-e16c-5f63-ba12-a21b91e82a7b",
        ancestor_id: "0c230927-dc44-58e2-9da9-bfba6a57be04",
        descendant_id: "0c230927-dc44-58e2-9da9-bfba6a57be04",
        depth: 0,
    },
    // root -> administrator
    {
        realm_id: "3c649fcf-e16c-5f63-ba12-a21b91e82a7b",
        ancestor_id: "07f78030-0988-5493-ae18-8e689d771857",
        descendant_id: "0c230927-dc44-58e2-9da9-bfba6a57be04",
        depth: 1,
    },
    // access-auditor -> access-auditor
    {
        realm_id: "3c649fcf-e16c-5f63-ba12-a21b91e82a7b",
        ancestor_id: "a3ebc499-282d-5526-bc4f-b49180dfd5d8",
        descendant_id: "a3ebc499-282d-5526-bc4f-b49180dfd5d8",
        depth: 0,
    },
    // root -> access-auditor
    {
        realm_id: "3c649fcf-e16c-5f63-ba12-a21b91e82a7b",
        ancestor_id: "07f78030-0988-5493-ae18-8e689d771857",
        descendant_id: "a3ebc499-282d-5526-bc4f-b49180dfd5d8",
        depth: 1,
    },
    // access-operator -> access-operator
    {
        realm_id: "3c649fcf-e16c-5f63-ba12-a21b91e82a7b",
        ancestor_id: "89fa60c4-3341-58e2-ac28-194b82a8edb9",
        descendant_id: "89fa60c4-3341-58e2-ac28-194b82a8edb9",
        depth: 0,
    },
    // root -> access-operator
    {
        realm_id: "3c649fcf-e16c-5f63-ba12-a21b91e82a7b",
        ancestor_id: "07f78030-0988-5493-ae18-8e689d771857",
        descendant_id: "89fa60c4-3341-58e2-ac28-194b82a8edb9",
        depth: 1,
    },
    // project-coordinator -> project-coordinator
    {
        realm_id: "3c649fcf-e16c-5f63-ba12-a21b91e82a7b",
        ancestor_id: "3bb996ba-b2c2-5be0-9c52-485978cb6901",
        descendant_id: "3bb996ba-b2c2-5be0-9c52-485978cb6901",
        depth: 0,
    },
    // root -> project-coordinator
    {
        realm_id: "3c649fcf-e16c-5f63-ba12-a21b91e82a7b",
        ancestor_id: "07f78030-0988-5493-ae18-8e689d771857",
        descendant_id: "3bb996ba-b2c2-5be0-9c52-485978cb6901",
        depth: 1,
    },
    // root -> root
    {
        realm_id: "9d5ec51a-0ff7-5fe9-a5bb-e8b257a21c32",
        ancestor_id: "9c54e6d8-40df-59f4-b997-1dd17c48241d",
        descendant_id: "9c54e6d8-40df-59f4-b997-1dd17c48241d",
        depth: 0,
    },
    // user -> user
    {
        realm_id: "9d5ec51a-0ff7-5fe9-a5bb-e8b257a21c32",
        ancestor_id: "10d7f626-21fd-5b05-9c72-6f015ba8f5d1",
        descendant_id: "10d7f626-21fd-5b05-9c72-6f015ba8f5d1",
        depth: 0,
    },
    // root -> user
    {
        realm_id: "9d5ec51a-0ff7-5fe9-a5bb-e8b257a21c32",
        ancestor_id: "9c54e6d8-40df-59f4-b997-1dd17c48241d",
        descendant_id: "10d7f626-21fd-5b05-9c72-6f015ba8f5d1",
        depth: 1,
    },
    // administrator -> administrator
    {
        realm_id: "9d5ec51a-0ff7-5fe9-a5bb-e8b257a21c32",
        ancestor_id: "528e5e26-de98-5209-8baa-ab2e3c8fb799",
        descendant_id: "528e5e26-de98-5209-8baa-ab2e3c8fb799",
        depth: 0,
    },
    // root -> administrator
    {
        realm_id: "9d5ec51a-0ff7-5fe9-a5bb-e8b257a21c32",
        ancestor_id: "9c54e6d8-40df-59f4-b997-1dd17c48241d",
        descendant_id: "528e5e26-de98-5209-8baa-ab2e3c8fb799",
        depth: 1,
    },
    // access-auditor -> access-auditor
    {
        realm_id: "9d5ec51a-0ff7-5fe9-a5bb-e8b257a21c32",
        ancestor_id: "f7cf15f9-ae61-5f18-a8a2-68ddc165bca2",
        descendant_id: "f7cf15f9-ae61-5f18-a8a2-68ddc165bca2",
        depth: 0,
    },
    // root -> access-auditor
    {
        realm_id: "9d5ec51a-0ff7-5fe9-a5bb-e8b257a21c32",
        ancestor_id: "9c54e6d8-40df-59f4-b997-1dd17c48241d",
        descendant_id: "f7cf15f9-ae61-5f18-a8a2-68ddc165bca2",
        depth: 1,
    },
    // access-operator -> access-operator
    {
        realm_id: "9d5ec51a-0ff7-5fe9-a5bb-e8b257a21c32",
        ancestor_id: "c9f8feca-ee03-5d24-ab65-8125263e2e86",
        descendant_id: "c9f8feca-ee03-5d24-ab65-8125263e2e86",
        depth: 0,
    },
    // root -> access-operator
    {
        realm_id: "9d5ec51a-0ff7-5fe9-a5bb-e8b257a21c32",
        ancestor_id: "9c54e6d8-40df-59f4-b997-1dd17c48241d",
        descendant_id: "c9f8feca-ee03-5d24-ab65-8125263e2e86",
        depth: 1,
    },
    // project-coordinator -> project-coordinator
    {
        realm_id: "9d5ec51a-0ff7-5fe9-a5bb-e8b257a21c32",
        ancestor_id: "94457b1c-5903-52f2-80cf-b9cca5ec470d",
        descendant_id: "94457b1c-5903-52f2-80cf-b9cca5ec470d",
        depth: 0,
    },
    // root -> project-coordinator
    {
        realm_id: "9d5ec51a-0ff7-5fe9-a5bb-e8b257a21c32",
        ancestor_id: "9c54e6d8-40df-59f4-b997-1dd17c48241d",
        descendant_id: "94457b1c-5903-52f2-80cf-b9cca5ec470d",
        depth: 1,
    },
    // root -> root
    {
        realm_id: "9bd6f385-1f03-5f60-b2ad-c56a828b6ddb",
        ancestor_id: "9cccc256-9778-5de8-9010-ce10aa5096e6",
        descendant_id: "9cccc256-9778-5de8-9010-ce10aa5096e6",
        depth: 0,
    },
    // user -> user
    {
        realm_id: "9bd6f385-1f03-5f60-b2ad-c56a828b6ddb",
        ancestor_id: "eb8b42b2-c238-5f89-b872-01d16cbe8170",
        descendant_id: "eb8b42b2-c238-5f89-b872-01d16cbe8170",
        depth: 0,
    },
    // root -> user
    {
        realm_id: "9bd6f385-1f03-5f60-b2ad-c56a828b6ddb",
        ancestor_id: "9cccc256-9778-5de8-9010-ce10aa5096e6",
        descendant_id: "eb8b42b2-c238-5f89-b872-01d16cbe8170",
        depth: 1,
    },
    // administrator -> administrator
    {
        realm_id: "9bd6f385-1f03-5f60-b2ad-c56a828b6ddb",
        ancestor_id: "f4fd23b7-38c8-5f5a-9617-d6e95ae5003a",
        descendant_id: "f4fd23b7-38c8-5f5a-9617-d6e95ae5003a",
        depth: 0,
    },
    // root -> administrator
    {
        realm_id: "9bd6f385-1f03-5f60-b2ad-c56a828b6ddb",
        ancestor_id: "9cccc256-9778-5de8-9010-ce10aa5096e6",
        descendant_id: "f4fd23b7-38c8-5f5a-9617-d6e95ae5003a",
        depth: 1,
    },
    // access-auditor -> access-auditor
    {
        realm_id: "9bd6f385-1f03-5f60-b2ad-c56a828b6ddb",
        ancestor_id: "58e609da-a2af-59a8-94dd-18abfb89be91",
        descendant_id: "58e609da-a2af-59a8-94dd-18abfb89be91",
        depth: 0,
    },
    // root -> access-auditor
    {
        realm_id: "9bd6f385-1f03-5f60-b2ad-c56a828b6ddb",
        ancestor_id: "9cccc256-9778-5de8-9010-ce10aa5096e6",
        descendant_id: "58e609da-a2af-59a8-94dd-18abfb89be91",
        depth: 1,
    },
    // access-operator -> access-operator
    {
        realm_id: "9bd6f385-1f03-5f60-b2ad-c56a828b6ddb",
        ancestor_id: "c9f501e2-90f5-51e5-a6e5-3734e17421ed",
        descendant_id: "c9f501e2-90f5-51e5-a6e5-3734e17421ed",
        depth: 0,
    },
    // root -> access-operator
    {
        realm_id: "9bd6f385-1f03-5f60-b2ad-c56a828b6ddb",
        ancestor_id: "9cccc256-9778-5de8-9010-ce10aa5096e6",
        descendant_id: "c9f501e2-90f5-51e5-a6e5-3734e17421ed",
        depth: 1,
    },
    // project-coordinator -> project-coordinator
    {
        realm_id: "9bd6f385-1f03-5f60-b2ad-c56a828b6ddb",
        ancestor_id: "88e8abde-2e81-5a05-b78c-1ee532b0850f",
        descendant_id: "88e8abde-2e81-5a05-b78c-1ee532b0850f",
        depth: 0,
    },
    // root -> project-coordinator
    {
        realm_id: "9bd6f385-1f03-5f60-b2ad-c56a828b6ddb",
        ancestor_id: "9cccc256-9778-5de8-9010-ce10aa5096e6",
        descendant_id: "88e8abde-2e81-5a05-b78c-1ee532b0850f",
        depth: 1,
    },
    // hr-sync -> hr-sync
    {
        realm_id: "2fd2dfdd-8df2-5ad6-83a3-cc2333888f28",
        ancestor_id: "2475bddc-82af-5f54-be7c-89ae5245d002",
        descendant_id: "2475bddc-82af-5f54-be7c-89ae5245d002",
        depth: 0,
    },
    // root -> hr-sync
    {
        realm_id: "2fd2dfdd-8df2-5ad6-83a3-cc2333888f28",
        ancestor_id: "c3619475-8d15-5549-a263-2678f183f5aa",
        descendant_id: "2475bddc-82af-5f54-be7c-89ae5245d002",
        depth: 1,
    },
    // crm-sync -> crm-sync
    {
        realm_id: "2fd2dfdd-8df2-5ad6-83a3-cc2333888f28",
        ancestor_id: "9c011756-11d5-5595-9b27-8941a5bfa1d4",
        descendant_id: "9c011756-11d5-5595-9b27-8941a5bfa1d4",
        depth: 0,
    },
    // root -> crm-sync
    {
        realm_id: "2fd2dfdd-8df2-5ad6-83a3-cc2333888f28",
        ancestor_id: "c3619475-8d15-5549-a263-2678f183f5aa",
        descendant_id: "9c011756-11d5-5595-9b27-8941a5bfa1d4",
        depth: 1,
    },
    // support-sync -> support-sync
    {
        realm_id: "2fd2dfdd-8df2-5ad6-83a3-cc2333888f28",
        ancestor_id: "27e048fb-92be-5def-bc6f-a1750e09283d",
        descendant_id: "27e048fb-92be-5def-bc6f-a1750e09283d",
        depth: 0,
    },
    // root -> support-sync
    {
        realm_id: "2fd2dfdd-8df2-5ad6-83a3-cc2333888f28",
        ancestor_id: "c3619475-8d15-5549-a263-2678f183f5aa",
        descendant_id: "27e048fb-92be-5def-bc6f-a1750e09283d",
        depth: 1,
    },
    // audit-export -> audit-export
    {
        realm_id: "2fd2dfdd-8df2-5ad6-83a3-cc2333888f28",
        ancestor_id: "0e59d2d4-8433-5878-9255-127625512703",
        descendant_id: "0e59d2d4-8433-5878-9255-127625512703",
        depth: 0,
    },
    // root -> audit-export
    {
        realm_id: "2fd2dfdd-8df2-5ad6-83a3-cc2333888f28",
        ancestor_id: "c3619475-8d15-5549-a263-2678f183f5aa",
        descendant_id: "0e59d2d4-8433-5878-9255-127625512703",
        depth: 1,
    },
    // directory-sync -> directory-sync
    {
        realm_id: "2fd2dfdd-8df2-5ad6-83a3-cc2333888f28",
        ancestor_id: "aa753afb-8cd7-58c5-b944-ebe104558c41",
        descendant_id: "aa753afb-8cd7-58c5-b944-ebe104558c41",
        depth: 0,
    },
    // root -> directory-sync
    {
        realm_id: "2fd2dfdd-8df2-5ad6-83a3-cc2333888f28",
        ancestor_id: "c3619475-8d15-5549-a263-2678f183f5aa",
        descendant_id: "aa753afb-8cd7-58c5-b944-ebe104558c41",
        depth: 1,
    },
    // demo-orchestrator -> demo-orchestrator
    {
        realm_id: "2fd2dfdd-8df2-5ad6-83a3-cc2333888f28",
        ancestor_id: "6183b141-e9f7-5017-89a8-6ac153a08d36",
        descendant_id: "6183b141-e9f7-5017-89a8-6ac153a08d36",
        depth: 0,
    },
    // root -> demo-orchestrator
    {
        realm_id: "2fd2dfdd-8df2-5ad6-83a3-cc2333888f28",
        ancestor_id: "c3619475-8d15-5549-a263-2678f183f5aa",
        descendant_id: "6183b141-e9f7-5017-89a8-6ac153a08d36",
        depth: 1,
    },
];

export const RoleClosures = {
    name: "role_closure",
    postgresql: dataset,
    redis: dataset,
};
