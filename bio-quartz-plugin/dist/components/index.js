import { createRequire } from 'module';
import { jsxs, jsx } from 'preact/jsx-runtime';

createRequire(import.meta.url);
var BioComponent = () => {
  const Bio = ({ displayClass }) => {
    return /* @__PURE__ */ jsxs("div", { class: `bio-widget ${displayClass ?? ""}`, children: [
      /* @__PURE__ */ jsx("h3", { children: "About the Author" }),
      /* @__PURE__ */ jsx("p", { children: "Welcome to my digital garden. I'm Pablo Gallardo, the creator behind these 1,000+ notes." }),
      /* @__PURE__ */ jsx("ul", { children: /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "https:/pmgallardo.com", children: "My personal website" }) }) })
    ] });
  };
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
  `;
  return Bio;
};

export { BioComponent };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map