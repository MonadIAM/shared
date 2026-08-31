import { PlatformService, KafkaTopic } from "./enums";
import { SchemaRegistry } from "./schema-registry";
import "./types";

export * from "./constants";
export * from "./enums";

export const SCHEMA_REGISTRY_ARTIFACTS: SchemaRegistry.Artifact[] = [
    SchemaRegistry.grpc(
        [PlatformService.IDENTITY_SERVICE, PlatformService.NOTIFICATION_SERVICE],
        [PlatformService.ACCESS_CONTROL_SERVICE],
        PlatformService.ACCESS_CONTROL_SERVICE,
    ),
    SchemaRegistry.kafka([PlatformService.ACCESS_CONTROL_SERVICE], [PlatformService.IDENTITY_SERVICE], KafkaTopic.ACCOUNT),
    SchemaRegistry.kafka([PlatformService.IDENTITY_SERVICE], [PlatformService.ACCESS_CONTROL_SERVICE], KafkaTopic.REALM),
    SchemaRegistry.kafka(
        [PlatformService.IDENTITY_SERVICE, PlatformService.NOTIFICATION_SERVICE, PlatformService.TEMPLATE_SERVICE],
        [PlatformService.ACCESS_CONTROL_SERVICE],
        KafkaTopic.ACCESS_CACHE,
    ),
    SchemaRegistry.kafka(
        [PlatformService.IDENTITY_SERVICE, PlatformService.ACCESS_CONTROL_SERVICE],
        [PlatformService.IDENTITY_SERVICE, PlatformService.ACCESS_CONTROL_SERVICE],
        KafkaTopic.MEMBERSHIP,
    ),
    SchemaRegistry.kafka(
        [PlatformService.NOTIFICATION_SERVICE],
        [PlatformService.IDENTITY_SERVICE, PlatformService.ACCESS_CONTROL_SERVICE],
        KafkaTopic.NOTIFICATION,
    ),
    SchemaRegistry.kafka(
        [
            PlatformService.ACCESS_CONTROL_SERVICE,
            PlatformService.NOTIFICATION_SERVICE,
            PlatformService.IDENTITY_SERVICE,
            PlatformService.TEMPLATE_SERVICE,
        ],
        [PlatformService.IDENTITY_SERVICE],
        KafkaTopic.BLACKLIST,
    ),
    SchemaRegistry.kafka(
        [
            PlatformService.ACCESS_CONTROL_SERVICE,
            PlatformService.NOTIFICATION_SERVICE,
            PlatformService.IDENTITY_SERVICE,
            PlatformService.TEMPLATE_SERVICE,
        ],
        [PlatformService.IDENTITY_SERVICE],
        KafkaTopic.REAUTHENTICATION,
    ),
    SchemaRegistry.kafka(
        [PlatformService.ACCESS_CONTROL_SERVICE],
        [PlatformService.ACCESS_CONTROL_SERVICE],
        KafkaTopic.PROJECTION_JOURNAL,
    ),
    SchemaRegistry.kafka(
        [PlatformService.NOTIFICATION_SERVICE],
        [PlatformService.NOTIFICATION_SERVICE],
        KafkaTopic.MESSAGE_DISPATCH,
    ),
];
