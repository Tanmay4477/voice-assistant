// clsx.d.ts
declare module 'clsx' {
    type ClassValue = string | number | boolean | undefined | null | ClassValue[];
    
    function clsx(...inputs: ClassValue[]): string;
    
    export default clsx;
}