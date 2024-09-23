import { ReactNode } from "react"

type PropsWithOptionalChildren<P = unknown> = P & { children?: ReactNode };

export default PropsWithOptionalChildren
