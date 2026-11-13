// src/components/index.tsx
import type { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "@quartz-community/types"

export const BioComponent: QuartzComponentConstructor = () => {
  
  const Bio: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    return (
      <div class={`bio-widget ${displayClass ?? ""}`}>
        <h3>About the Author</h3>
        <p>Welcome to my digital garden. I'm Pablo Gallardo, the creator behind these 1,000+ notes.</p>
        <ul>
          <li><a href="https:/pmgallardo.com">My personal website</a></li>
        </ul>
      </div>
    )
  }

  Bio.css = `
  .bio-widget {
    margin-top: 1.5rem;
    padding: 1rem;
    border-left: 3px solid var(--secondary);
    background-color: var(--light);
  }
  .bio-widget h3 {
    margin-top: 0;
    font-size: 1.1rem;
  }
  .bio-widget ul {
    list-style: none;
    padding-left: 0;
  }
  `

  return Bio
}
