import {ReactNode} from 'react';

type cardProps = {
  children: ReactNode
}

export default function Card({ children }: cardProps) {
    return (
        <section className="profile">
          { children }
        </section>
    );
}
  