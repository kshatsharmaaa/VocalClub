import { StreamClient } from "@stream-io/node-sdk"; 

const apiKey = "h8dyqsqxarrg";
const apiSecret = "yt95e8u3eq33vm4g6agxg48u37by93be5v25vmpndsqq4rcqrs93myapqrhd99g6";

export const client = new StreamClient(apiKey, apiSecret);