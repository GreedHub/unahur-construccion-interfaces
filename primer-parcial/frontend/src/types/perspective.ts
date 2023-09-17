const Perspective = {
    "CONTACT":"CONTACT",
    "USER":"USER"
} as const

export type Perspectives = keyof typeof Perspective

export default Perspective