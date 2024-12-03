// docs/.vitepress/config.ts
import { defineConfig } from 'vitepress'

// VitePress Site Configuration
// https://vitepress.dev/reference/site-config

export default defineConfig({

  // --- Basic Site Information ---
  title: "Essential Docs",           // Site title displayed in the browser tab
  description: "Essential Documentation",  // Site meta description for search engines
  base: '/essential-docs-hub/',      // Set base to the repository name

  // --- Add Favicon ---
  head: [
    ['link', { rel: 'icon', href: '/essential-docs-hub/favicon.svg' }],
    // Open Graph Meta Tags
    ['meta', { property: 'og:title', content: 'Essential Docs' }],
    ['meta', { property: 'og:description', content: 'Your guide to Essential Documentation.' }],
    ['meta', { property: 'og:image', content: '/essential-docs-hub/card-image.png' }], 
    ['meta', { property: 'og:url', content: 'https://docs.essential.builders/' }], 
    ['meta', { property: 'og:type', content: 'website' }],

    // Twitter Card Meta Tags
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'Essential Docs' }],
    ['meta', { name: 'twitter:description', content: 'Your guide to Essential Documentation.' }],
    ['meta', { name: 'twitter:image', content: '/essential-docs-hub/card-image.png' }]
  ],

  // --- Theme and Navigation Settings ---
  themeConfig: {
    
    // --- Top Navigation Bar Links ---
    nav: [
      { text: 'Home', link: '/' },   // Link to the homepage
    ],
    
    // --- Sidebar Configuration ---
    sidebar: [
      
      // --- Introduction Section ---
      {
        text: 'Overview',          // Sidebar heading for Introduction
        items: [
          { text: 'Welcome to Essential', link: '/welcome', }
        ]
      },
      // --- Learn Section ---
      {
        text: 'Learn',                 // Sidebar heading for learning resources
        collapsed: true, 
        items: [
          
          // Topic: Declarative vs Imperative Programming
          { 
            text: 'Declarative vs Imperative', 
            link: '/learn/declarative-vs-imperative/',
            collapsed: false,           // Start as collapsed
            items: [
              { text: 'Programming', link: '/learn/declarative-vs-imperative/programming' },   // Programming types intro
              
              // Subtopic: Imperative Pitfalls
              { text: 'Imperative Pitfalls', 
                collapsed: true,
                items: [
                  { text: 'Sub-optimal Outcomes', link: '/learn/declarative-vs-imperative/imperative-pitfalls/sub-optimal-outcomes' },
                  { text: 'Execution Bottleneck', link: '/learn/declarative-vs-imperative/imperative-pitfalls/execution-bottleneck' },
                ]
              },
              
              // Subtopic: Declarative Approach
              { text: 'Early Declarative Applications: "Intents"', 
                collapsed: true,
                link: '/learn/declarative-vs-imperative/early-declarative-applications'
              },
            ]          
          },
          
          // Topic: A Declarative Blockchain
          {
            text: 'A Declarative Blockchain',
            collapsed: false,           // Start as collapsed
            items: [
              { text: 'What is a Declarative Blockchain?', 
                link: '/learn/declarative-blockchain/overview', 
                items: [
                  { text: 'Criterion 1', link: '/learn/declarative-blockchain/criterion-1' },  // Introduction to declarative blockchain
                  { text: 'Criterion 2', link: '/learn/declarative-blockchain/criterion-2' },      // Key features of declarative blockchain
                ]
              },      // Overview of declarative blockchain
              { text: 'Advantages', link: '/learn/declarative-blockchain/advantages' },  // Advantages section
              { text: 'Landscape', link: '/learn/declarative-blockchain/landscape' },    // Blockchain landscape overview
            ]
          },
        ]
      },
      
      // --- Build Section ---
      {
        text: 'Build',                 // Sidebar heading for building resources
        collapsed: true, 
        items: [
          
          // Topic: Getting Started Guide
          { 
            text: 'Getting Started', 
            link: '/build/getting-started/', 
            items: [
              
              // Subsection: Installation Methods
              { 
                text: 'Installation',    // Installation guide
                collapsed: true,
                link: '/build/getting-started/installation/', 
                items: [
                  { text: 'Nix', link: '/build/getting-started/installation/nix' },    // Nix installation guide
                  { text: 'Crates IO', link: '/build/getting-started/installation/crates-io' },   // Crates IO installation
                ]
              }, 
              { text: 'Components', link: '/build/getting-started/components' },   // Configuration and components setup
              
              // Subsection: Example Projects
              { 
                text: 'Example', 
                collapsed: true,
                link: '/build/getting-started/example/', 
                items: [
                  
                  // Example Project: Pint
                  { 
                    text: 'Pint',
                    collapsed: true,
                    items: [
                      { text: 'New Project', link: '/build/getting-started/example/pint/new-project' },  // Setting up a new Pint project
                      { text: 'Define Storage', link: '/build/getting-started/example/pint/define-storage' },  // Define storage features
                      { text: 'Write Predicate', link: '/build/getting-started/example/pint/write-predicate' },  // Write predicate
                      { text: 'Compile', link: '/build/getting-started/example/pint/compile' },  // Compile the project
                      { text: 'Deploy and Solve', link: '/build/getting-started/example/pint/deploy-and-solve' },  // Deploy the project
                    ] 
                  },  
                  
                  // Example Project: Rust Workflow
                  {
                    text: 'Cargo Project',
                    collapsed: true,
                    items: [
                      { text: 'Setup', link: '/build/getting-started/example/cargo/setup' },    // Rust project setup
                      
                      // Development Process
                      { 
                        text: 'Develop', 
                        collapsed: true,
                        items: [
                          { text: 'Dependencies', link: '/build/getting-started/example/cargo/dependencies' },   // Dependency setup
                          { text: 'ABI Generation', link: '/build/getting-started/example/cargo/abi-gen' },                   // ABI generation
                          { text: 'Keys', link: '/build/getting-started/example/cargo/keys' },                   // Key management
                          { text: 'Extract Count', link: '/build/getting-started/example/cargo/extract-count' }, // Data extraction
                          { text: 'Create Solution', link: '/build/getting-started/example/cargo/create-solution' }, // Create solutions
                          { text: 'Increment', link: '/build/getting-started/example/cargo/increment' },          // Increment function
                          { text: 'Review', link: '/build/getting-started/example/cargo/review' },                // Review code
                        ]
                      },
                      
                      // Testing Steps
                      { 
                        text: 'Test',
                        collapsed: true, 
                        items: [
                          { text: 'Generate Address', link: '/build/getting-started/example/cargo/test/generate-address' }, // Address generation
                          { text: 'Deploy Contract', link: '/build/getting-started/example/cargo/test/deploy-contract' },   // Contract deployment
                          { text: 'Read Count', link: '/build/getting-started/example/cargo/test/read-count' },             // Reading data
                          { text: 'Increment Count', link: '/build/getting-started/example/cargo/test/increment' },   // Data increment
                          { text: 'Build Block', link: '/build/getting-started/example/cargo/test/build-block' },           // Block creation
                          { text: 'Competing Solutions', link: '/build/getting-started/example/cargo/test/solutions' }, // Solution competition
                          { text: 'Review', link: '/build/getting-started/example/cargo/test/review' },                    // Code review
                        ]
                      },  
                    ] 
                  },
                  {
                    text: 'Rust CLI',
                    collapsed: true,
                    items: [
                      { text: 'Dependencies', link: '/build/getting-started/example/rust-cli/dependencies' },   // Dependency setup
                      { text: 'Generate Address', link: '/build/getting-started/example/rust-cli/generate-address' },                   // Key management
                      { text: 'Args', link: '/build/getting-started/example/rust-cli/args' }, // Data extraction
                      { text: 'Query Count', link: '/build/getting-started/example/rust-cli/query-count' }, // Create solutions
                      { text: 'Run', link: '/build/getting-started/example/rust-cli/run' },          // Increment function
                      { text: 'Review', link: '/build/getting-started/example/rust-cli/review' },                // Review code
                    ]
                  },
                  {
                    text: 'Interact with Testnet',
                    link: '/build/getting-started/example/interact-testnet'
                  }
                ]
              },
            ]                 
          },
        ]
      },
      // --- Protocol Section ---
      {
        text: 'Protocol',               // Sidebar heading for protocol documentation
        collapsed: true,                // Collapsed by default
        items: [
          { text: 'Overview', link: '/protocol/overview' },     // General protocol overview
          { text: 'Core Components', link: '/protocol/core-components' },  // Details on core components
          { text: 'Contracts', link: '/protocol/contracts/', 
            items: [
              { text: 'Predicates', link: '/protocol/contracts/predicates' },
              { text: 'Constraints', link: '/protocol/contracts/constraints' }
            ]
          },
          { text: 'User Data', link: '/protocol/user-data' },
          { text: 'Solutions', link: '/protocol/solutions' },
          { text: 'Applications', link: '/protocol/applications' },
        ]
      },
      // --- Pint Section ---
      {
        text: 'Pint',
        link: '/pint',
        collapsed: true,                // Collapsed by default
        items: [
          
          // Subtopic: Contracts in Pint
          {
            text: 'Quickstart Guide',
            link: '/pint/quickstart',
          },
          { text: 'Contracts', 
            link: '/pint/contracts/', 
            items: [
              { text: 'Predicates', link: '/pint/contracts/predicates' },
              { text: 'Constraints', link: '/pint/contracts/constraints' },
            ]
          },
          {
            text: 'Programming Concepts',
            link: '/pint/programming-concepts',
            collapsed: true,                // Collapsed by default
            items: [
              { text: 'Variables', link: '/pint/programming-concepts/variables' },
              { text: 'Data Types', link: '/pint/programming-concepts/data-types' },
              { text: 'Comments', link: '/pint/programming-concepts/comments' },
              { text: 'Conditionals', link: '/pint/programming-concepts/conditionals' },
              { text: 'Custom Types', link: '/pint/programming-concepts/custom/', 
                items: [
                  { text: 'Type Aliases', link: '/pint/programming-concepts/custom/type-aliases' },
                  { text: 'Unions', link: '/pint/programming-concepts/custom/union' },
                  { text: 'match Construct', link: '/pint/programming-concepts/custom/match-construct' },
                ]
              },
              { text: 'Constraints', link: '/pint/programming-concepts/constraints' },
              { text: 'Constants', link: '/pint/programming-concepts/constants' },
            ]
          },
          {
            text: 'Storage',
            collapsed: true,                // Collapsed by default
            link: '/pint/storage',
            items: [
              { text: 'Statically-Sized Storage', link: '/pint/storage/static' },
              { text: 'Dynamically-sized Storage', link: '/pint/storage/dynamic' },
              { text: 'External Storage', link: '/pint/storage/external' },
            ]
          },
          {
            text: 'Managing Growing Projects',
            collapsed: true,                // Collapsed by default
            link: '/pint/managing-growing-projects',
            items: [
              { text: 'Pint Projects', link: '/pint/managing-growing-projects/pint-projects' },
              { text: 'Defining Modules', link: '/pint/managing-growing-projects/defining-modules' },
              { text: 'Paths for Referencing Item in Module Tree', link: '/pint/managing-growing-projects/paths-for-referencing-items-in-module-tree' },
              { text: 'Bringing Paths into Scope', link: '/pint/managing-growing-projects/bringing-paths-into-scope' },
            ]

          },
          {
            text: 'Advanced Features',
            collapsed: true,                // Collapsed by default
            items: [
              { text: 'Invoking Predicates', link: '/pint/advanced-features/invoking-predicates' },
              { text: 'Macros', link: '/pint/advanced-features/macros' },
            ]
          },
          { 
            text: 'Examples', 
            collapsed: true,
            link: '/pint/examples/',
            items: [
              { text: 'Counter', link: '/pint/examples/counter' },
              { text: 'Subcurrency', link: '/pint/examples/subcurrency' },
              
            ]
          },
          {
            text: 'Reference',
            link: '/pint/reference',
            collapsed: true,                // Collapsed by default
            items: [
              { text: 'Commands', link: '/pint/reference/commands' },
              { text: 'Manifest', link: '/pint/reference/manifest' },
            ]

          },
          {
            text: 'Appendix',
            link: '/pint/appendix',
            collapsed: true,                // Collapsed by default
            items: [
              { text: 'Keywords', link: '/pint/appendix/keywords' },
              { text: 'Compiler Intrinsics', link: '/pint/appendix/compiler-intrinsics' },
              { text: 'ABI Specification', link: '/pint/appendix/abi-spec' },
              { text: 'Constructing Solutions Using the ABI', link: '/pint/appendix/abi-solution-generation' },
              { text: 'Storage Keys Assignment', link: '/pint/appendix/storage-keys' },
              { text: 'Known Issues and Missing Features', link: '/pint/appendix/known-issues' },
            ]
          }
        ]
      },
  
    ],
    
    // --- Footer Social Links ---
    socialLinks: [
      { icon: 'github', link: 'https://github.com/essential-contributions' },   // GitHub repository link
      { icon: 'x', link: 'https://x.com/intentessential' },   // Twitter account link
      { icon: 'discord', link: 'https://discord.gg/essential-builders' },   // Discord server link
      { icon: 'linkedin', link: 'https://www.linkedin.com/company/essentialbuilders' },   // LinkedIn page link
      { icon: 'book', link: 'https://blog.essential.builders' },   // Blog link
    ]
  }
})
