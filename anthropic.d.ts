// anthropic.d.ts
declare module '@anthropic-ai/sdk' {
    class Anthropic {
      constructor(options?: {
        apiKey?: string;
        baseURL?: string;
      });
  
      messages: {
        create: (params: {
          model: string;
          messages: Array<{
            role: string;
            content: any;
          }>;
          max_tokens?: number;
          temperature?: number;
          system: string
        }) => Promise<any>;
      };
    }
  
    export default Anthropic;
  }