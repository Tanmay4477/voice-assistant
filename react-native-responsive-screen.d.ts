declare module 'react-native-responsive-screen' {
    export function widthPercentageToDP(widthPercent: string): number;
    export function heightPercentageToDP(heightPercent: string): number;
    export function listenOrientationChange(that: any): void;
    export function removeOrientationListener(): void;
}