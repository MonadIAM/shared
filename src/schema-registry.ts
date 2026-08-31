import { join } from "node:path";

import { PlatformService, KafkaTopic } from "./enums";

export class SchemaRegistry {
    private static readonly PROTOBUF: SchemaRegistry.ArtifactType = "PROTOBUF";
    private static readonly KAFKA_GROUP = "monadiam.kafka";
    private static readonly GRPC_GROUP = "monadiam.grpc";

    public static kafka(
        consumers: readonly PlatformService[],
        producers: readonly PlatformService[],
        topic: KafkaTopic,
    ): SchemaRegistry.Artifact {
        return {
            protoPath: join(__dirname, `proto/kafka/${topic.replaceAll("-", "_")}.proto`),
            artifactType: this.PROTOBUF,
            artifact: `${topic}-value`,
            group: this.KAFKA_GROUP,
            protocol: "kafka",
            producers,
            consumers,
        };
    }

    public static grpc(
        consumers: readonly PlatformService[],
        producers: readonly PlatformService[],
        service: PlatformService,
    ): SchemaRegistry.Artifact {
        return {
            protoPath: join(__dirname, `proto/grpc/${service.replaceAll("-", "_")}.proto`),
            artifactType: this.PROTOBUF,
            group: this.GRPC_GROUP,
            artifact: service,
            protocol: "grpc",
            producers,
            consumers,
        };
    }
}
