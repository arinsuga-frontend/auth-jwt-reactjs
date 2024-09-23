import { ReactNode } from "react"

type PropsWithChildren<P = unknown> = P & { children: ReactNode };

export default PropsWithChildren
