export const Data = [
    {
        question: "Coding Exercise",
        answer: [
            "<a href='/counterComponent'>Build a simple counter</a>",
            "<a href='/componentCommunication'>Component communication using @Input & @Output / Services</a>"
        ]
    },
    {
        question: "What is Angular",
        answer: "Angular is a TypeScript-based open-source web application framework developed and maintained by Google. It is used to build single-page client applications with a strong focus on modularity, maintainability, and performance."
    },
    {
        question: "Key Features of Angular",
        answer: [
            "Component-Based Architecture -> Apps are built using reusable components (HTML + TypeScript + CSS/SCSS).",
            "Two-Way Data Binding -> Automatically syncs data between the model and the view.",
            "Dependency Injection -> Services and other dependencies are injected where needed, improving modularity.",
            "Routing -> Built-in support for SPA-style routing and navigation.",
            "TypeScript Support -> Uses TypeScript for better tooling, type safety, and modern JavaScript features.",
            "RxJS and Observables -> For reactive programming and managing asynchronous data.",
            "CLI (Command Line Interface) -> ng CLI helps generate components, services, and run builds/tests easily."
        ]
    },
    {
        question: "Angular vs React [ Full Framework vs Library ]",
        answer: [
            "Angular is a complete framework with everything built-in: routing, form validation, HTTP client, state management, etc.",
            "React is just a UI library, so you often need third-party libraries (like React Router, Redux, etc.) to build a full app.",
            "Advantage: Angular provides a consistent and unified development experience.",
            "Two-Way Data Binding: Angular supports two-way binding natively with [(ngModel)]. Simplifies form and UI interaction without extra setup.",
            "CLI Tooling: Fast setup, scaffolding, and consistent code generation."
        ]
    },
    {
        question: "Roles of an HTTP Interceptor",
        answer: [
            "Intercepts all HTTP requests and responses",
            "Add authentication tokens like JWT to every request : req = req.clone({ setHeaders: { Authorization: `Bearer ${token}` }});",
            "Log outgoing requests or responses for debugging or analytics.",
            "Catch HTTP errors (like 401 Unauthorized or 500 Server Error) in a centralized way.",
            "Modify/Transform the request body, response body, or headers.",
            "Automatically retry requests using RxJS operators."
        ]
    },
    {
        question: "Data transfer within components",
        answer: [
            "Depends on the relationship between the components (parent-child, siblings, or unrelated).",
            "Pass data from a parent component to a child using @Input().",
            "Child to Parent – via @Output() and EventEmitter -> Child component emits an event, and the parent handles it.",
            "Use a service with a Subject or BehaviorSubject to share data.",
            "Unrelated Components (Global Communication), state management like NgRx or Akita."
        ]
    },
    { question: 'Angular Pipes', answer: 'Pipes are a way to format, filter, and manipulate data in short transform data before displaying it in your templates without modifying the underlying data source.' },
    { question: 'Pure Impure Pipes uses', answer: 'Use pure pipes when dealing with immutable data and impure pipes when your transformations might have side effects or depend on external state changes' },
    {
      question: "Component Lifecycle",
      answer: "A component's lifecycle is the sequence of steps that happen between the component's creation and its destruction. https://angular.dev/guide/components/lifecycle#ngaftercontentchecked"
    },
    {
        question: "Sharing data between components",
        answer: [
            "Parent to Child: Use @Input.",
            "Child to Parent: Use @Output and EventEmitter.",
            "Sibling Components: Use a shared service.",
            "Across Routes: Use Angular Router.",
            "Global State: Use a shared service or state management library like ngRx. Actions, reducers, selectors, and effects are the building blocks that help you work with the store."
        ]
    },
    {
        question: "AOT and JIT in Angular",
        answer: [
            "Before the browser downloads and runs the code, The Ahead-Of-Time (AOT) compiler converts the Angular HTML and TypeScript code into JavaScript during the build phase.",
            "JIT compiles code in the browser at runtime"
        ]
    },
    {
        question: "Directive is a class that used to attach behavior to elements in the DOM",
        answer: [
            "Component Directives - Every Angular component is technically a directive with its own view.",
            "Structural Directives - These change the structure of the DOM by adding or removing elements. Examples: *ngIf/*ngFor/*ngSwitch",
            "Attribute Directives - These change the appearance of an element. Examples: ngClass/ngStyle"
        ]
    },
    {
        question: "What is data binding in Angular : communication between the component and the DOM",
        answer: [
            "Interpolation: {{ expression }}",
            "Property binding: [property]='value'",
            "Event binding: (event)='handler'",
            "Two-way binding: [(ngModel)]='property'"
        ]
    },
    {
        question: "What are Decorators",
        answer: "Decorators are special functions in Angular that add metadata to classes, methods, properties, or parameters, enabling Angular to understand how they should be processed or handled code elements during compilation and runtime."
    },
    {
        question: "Types of decorator in Angular - 4 types of decorators, categorized by their use",
        answer: [
            "Class Decorators -> Used to mark classes as components, directives, pipes, service, etc.",
            "Property Decorators -> Used to bind properties in components : @Input() / @Output(), @ViewChild() / @ViewChildren(), @ContentChild() / @ContentChildren()",
            "Method Decorators -> Used on class methods (less common in Angular but available via @HostListener, @HostBinding)",
            "Parameter Decorators -> Used in constructors to tell Angular how to inject dependencies : @Inject()"
        ]
    },
    {
        question: "Angular, component lifecycle",
        answer: "In Angular, component lifecycle methods are a set of hooks that allow you to tap into key moments in a component's or directive’s lifetime—from its creation to destruction. These lifecycle hooks help you manage initialization, updates, and cleanup tasks efficiently."
    },
    {
        question: "Angular Lifecycle Hooks (Component Lifecycle) : Hook Sequence (Typical Order of Execution)",
        answer: [
            "ngOnChanges() – when input properties change.",
            "ngOnInit() – initialization logic.",
            "ngDoCheck() – custom change detection (optional).",
            "ngAfterContentInit() – projected content initialized.",
            "ngAfterContentChecked() – projected content checked.",
            "ngAfterViewInit() – component’s views initialized.",
            "ngAfterViewChecked() – component’s views checked.",
            "ngOnDestroy() – cleanup logic before component is destroyed."
        ]
    }
];