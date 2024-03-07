import {ReactNode} from 'react';

export default function Card({ children }) {
    return (
        <section className="profile">
          { children }
        </section>
    );
}
  