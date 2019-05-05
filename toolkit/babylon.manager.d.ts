declare module BABYLON {
    /**
     * Babylon scene manager class
     * @class SceneManager
     */
    class SceneManager {
        /** Gets the toolkit framework version number */
        static readonly VersionNumber: string;
        /** Managed animation group start mode */
        static AnimationStartMode?: BABYLON.GLTFLoaderAnimationStartMode;
        /** Forces scene loader into right hand mode */
        static ForceRightHanded?: boolean;
        /** Enable scene physics system debug tracing */
        static DebugPhysics: boolean;
        /** Managed json data store object */
        static DataStore: any;
        private static EnableSceneParsing;
        /** Enable scene loader parsing plugin */
        static EnableSceneLoader(enabled: boolean): void;
        /** Is scene loader parsing plugin enabled */
        static IsSceneLoaderEnabled(): boolean;
        /** Are unversial windows platform services available. */
        static IsWindows(): boolean;
        /** Are mobile cordova platform services available. */
        static IsCordova(): boolean;
        /** Are web assembly platform services available. */
        static IsWebAssembly(): boolean;
        /** Is oculus browser platform agent. */
        static IsOculusBrowser(): boolean;
        /** Is samsung browser platform agent. */
        static IsSamsungBrowser(): boolean;
        /** Is windows phone platform agent. */
        static IsWindowsPhone(): boolean;
        /** Is blackberry web platform agent. */
        static IsBlackBerry(): boolean;
        /** Is opera web platform agent. */
        static IsOperaMini(): boolean;
        /** Is android web platform agent. */
        static IsAndroid(): boolean;
        /** Is web os platform agent. */
        static IsWebOS(): boolean;
        /** Is ios web platform agent. */
        static IsIOS(): boolean;
        /** Is iphone web platform agent. */
        static IsIPHONE(): boolean;
        /** Is ipad web platform agent. */
        static IsIPAD(): boolean;
        /** Is ipod web platform agent. */
        static IsIPOD(): boolean;
        /** Is internet explorer 11 platform agent. */
        static IsIE11(): boolean;
        /** Is mobile web platform agent. */
        static IsMobile(): boolean;
        /** Are playstation platform services available. */
        static IsPlaystation(): boolean;
        /** Are xbox one platform services available. */
        static IsXboxOne(): boolean;
        /** Are xbox live platform services available. */
        static IsXboxLive(): boolean;
        /** Run a function on the next render loop. */
        static RunOnce(scene: BABYLON.Scene, func: () => void): void;
        /** Popup debug layer in window. */
        static PopupDebug(scene: BABYLON.Scene): void;
        /** Toggle debug layer on and off. */
        static ToggleDebug(scene: BABYLON.Scene, popups?: boolean, parent?: HTMLElement): void;
        /** Disposes entire scene and release all resources */
        static DisposeScene(scene: BABYLON.Scene, clearColor?: BABYLON.Color4): void;
        /** Delays a function call using request animation frames. Returns a handle object */
        static SetTimeout(timeout: number, func: () => void): any;
        /** Calls request animation frame delay with handle to cancel pending timeout call */
        static ClearTimeout(handle: any): void;
        /** Repeats a function call using request animation frames. Retuns a handle object */
        static SetInterval(interval: number, func: () => void): any;
        /** Calls request animation frame repeast with handle to clear pending interval call. */
        static ClearInterval(handle: any): void;
        /** TODO */
        static RayCast(scene: BABYLON.Scene, ray: BABYLON.Ray, predicate?: (mesh: BABYLON.AbstractMesh) => boolean, fastCheck?: boolean): BABYLON.PickingInfo;
        /** TODO */
        static MultiRayCast(scene: BABYLON.Scene, ray: BABYLON.Ray, predicate?: (mesh: BABYLON.AbstractMesh) => boolean): BABYLON.PickingInfo[];
        /** Safely destroy transform node */
        static SafeDestroy(transform: BABYLON.TransformNode, delay?: number, disable?: boolean): void;
        /** Open alert message dialog. */
        static AlertMessage(text: string, title?: string): any;
        /**  Gets the names query string from page url. */
        static GetQueryStringParam(name: string, url: string): string;
        /** Gets the current engine WebGL version string info. */
        static GetWebGLVersionString(scene: BABYLON.Scene): string;
        /** Gets the current engine WebGL version number info. */
        static GetWebGLVersionNumber(scene: BABYLON.Scene): number;
        /** TODO */
        static GetDeltaSeconds(scene: BABYLON.Scene): number;
        /** Gets the instanced material from scene. If does not exists, execute a optional defaultinstance handler. */
        static GetMaterialInstance<T>(scene: BABYLON.Scene, name: string, defaultInstance?: (newName: String) => BABYLON.Material): T;
        /** Set the Windows Runtime preferred launch windowing mode. */
        static SetWindowsLaunchMode(mode: Windows.UI.ViewManagement.ApplicationViewWindowingMode): void;
        /** Removes the default page scene loader. */
        static RemoveSceneLoader(): void;
        /** Quit the Windows Runtime host application. */
        static QuitWindowsApplication(): void;
        /** Get the last create engine instance */
        static GetEngineInstances(): BABYLON.Engine[];
        /** Get the last create engine instance */
        static GetLastCreatedEngine(): BABYLON.Engine;
        /** Get the last created scene instance */
        static GetLastCreatedScene(): BABYLON.Scene;
        /** Gets the specified mesh from scene. */
        static GetMesh(scene: BABYLON.Scene, name: string): BABYLON.AbstractMesh;
        /** Gets the specified transform node from scene. */
        static GetTransform(scene: BABYLON.Scene, name: string): BABYLON.TransformNode;
        /** Gets the specified prefab mesh from scene. */
        static GetPrefabMesh(scene: BABYLON.Scene, prefabName: string): BABYLON.AbstractMesh;
        /** TODO: Remove This - Gets the transform node primitive meshes. */
        static GetPrimitiveMeshes(transform: TransformNode): BABYLON.AbstractMesh[];
        /** Gets the transform node collision meshes. */
        static GetCollisionMeshes(transform: TransformNode): BABYLON.AbstractMesh[];
        /** Gets the system navigation mesh from scene. */
        static GetNavigationMesh(scene: BABYLON.Scene): BABYLON.AbstractMesh;
        /** Instantiates the specfied prefab object into scene. */
        static InstantiatePrefab(scene: BABYLON.Scene, name: string, cloneName: string, newParent?: Node, newPosition?: BABYLON.Vector3, newRotation?: BABYLON.Vector3, newScaling?: BABYLON.Vector3): BABYLON.AbstractMesh;
        /** TODO */
        static RegisterScriptComponent(instance: BABYLON.ScriptComponent, validate?: boolean): void;
        /** TODO */
        static DestroyScriptComponent(instance: BABYLON.ScriptComponent): void;
        /** Finds a script component in the scene with the specfied class name. */
        static FindScriptComponent<T extends BABYLON.ScriptComponent>(transform: BABYLON.TransformNode, klass: string): T;
        /** Finds all script components in the scene with the specfied class name. */
        static FindScriptComponents<T extends BABYLON.ScriptComponent>(transform: BABYLON.TransformNode, klass: string): T[];
        /** Finds the transform object metedata in the scene. */
        static FindSceneMetadata(transform: BABYLON.TransformNode): any;
        /** Finds the specfied particle system rig in the scene. */
        static FindSceneParticleRig(transform: BABYLON.TransformNode): BABYLON.ParticleSystem;
        /** Finds the specfied camera rig in the scene. */
        static FindSceneCameraRig(transform: BABYLON.TransformNode): BABYLON.Camera;
        /** Finds the specfied light rig in the scene. */
        static FindSceneLightRig(transform: BABYLON.TransformNode): BABYLON.Light;
        /** Finds the specfied lens flare system rig in the scene. */
        static FindSceneFlareRig(transform: BABYLON.TransformNode): BABYLON.LensFlareSystem;
        /** Finds the specfied child mesh in the scene. */
        static FindSceneChildMesh(transform: BABYLON.TransformNode, name: string, searchType?: BABYLON.SearchType, directDecendantsOnly?: boolean, predicate?: (node: BABYLON.Node) => boolean): BABYLON.AbstractMesh;
        /** Finds the specfied child transform in the scene. */
        static FindSceneChildTransform(transform: BABYLON.TransformNode, name: string, searchType?: BABYLON.SearchType, directDecendantsOnly?: boolean, predicate?: (node: BABYLON.Node) => boolean): BABYLON.AbstractMesh;
        /** Gets the default navigation zone (https://github.com/wanadev/babylon-navigation-mesh) */
        static GetNavigationZone(): string;
        /** Build navigation mesh zone nodes (https://github.com/wanadev/babylon-navigation-mesh) */
        static BuildNavigationNodes(scene: BABYLON.Scene, customNavMesh?: BABYLON.AbstractMesh): Navigation;
        /** Finds a navigation path and returns a array of navigation positions (https://github.com/wanadev/babylon-navigation-mesh) */
        static FindNavigationPath(navigation: Navigation, origin: BABYLON.Vector3, destination: BABYLON.Vector3): BABYLON.Vector3[];
        private static PhysicsViewer;
        /** Callback to setup ammo.js plugin when activated on the scene */
        static OnSetupPhysicsPlugin: (scene: BABYLON.Scene, plugin: BABYLON.AmmoJSPlugin) => void;
        /** Applies force to transform using physics impostor. */
        static ApplyEntityForce(entity: BABYLON.AbstractMesh, force: BABYLON.Vector3, contact: BABYLON.Vector3): void;
        /** Applies impulse to entity using physics impostor. */
        static ApplyEntityImpulse(entity: BABYLON.AbstractMesh, impusle: BABYLON.Vector3, contact: BABYLON.Vector3): void;
        /** Applies friction to entity using physics impostor. */
        static ApplyEntityFriction(entity: BABYLON.AbstractMesh, friction: number): void;
        /** Gets mass of entity using physics impostor. */
        static GetEntityMass(entity: BABYLON.AbstractMesh): number;
        /** Sets mass to entity using physics impostor. */
        static SetEntityMass(entity: BABYLON.AbstractMesh, mass: number): void;
        /** Gets restitution of entity using physics impostor. */
        static GetEntityRestitution(entity: BABYLON.AbstractMesh): number;
        /** Sets restitution to entity using physics impostor. */
        static SetEntityRestitution(entity: BABYLON.AbstractMesh, restitution: number): void;
        /** Gets entity friction level using physics impostor. */
        static GetEntityFrictionLevel(entity: BABYLON.AbstractMesh): number;
        /** Gets entity linear velocity using physics impostor. */
        static GetEntityLinearVelocity(entity: BABYLON.AbstractMesh): BABYLON.Vector3;
        /** Sets entity linear velocity using physics impostor. */
        static SetEntityLinearVelocity(entity: BABYLON.AbstractMesh, velocity: BABYLON.Vector3): void;
        /** Gets entity angular velocity using physics impostor. */
        static GetEntityAngularVelocity(entity: BABYLON.AbstractMesh): BABYLON.Vector3;
        /** Sets entity angular velocity using physics impostor. */
        static SetEntityAngularVelocity(entity: BABYLON.AbstractMesh, velocity: BABYLON.Vector3): void;
        /** Checks collision contact of the entity using physics impostor. */
        static CheckEntityCollisionContact(entity: BABYLON.AbstractMesh, collider: BABYLON.AbstractMesh, contact: BABYLON.CollisionContact, threashold?: number): boolean;
        /** Shows the entity physics impostor for debugging. */
        static ShowEntityPhysicsImpostor(scene: BABYLON.Scene, entity: BABYLON.AbstractMesh): void;
        /** Hides the entity physics impostor for debugging. */
        static HideEntityPhysicsImpostor(scene: BABYLON.Scene, entity: BABYLON.AbstractMesh): void;
        /** Moves entity using collisions. */
        static MoveWithCollisions(entity: BABYLON.AbstractMesh, velocity: BABYLON.Vector3): void;
        /** Moves entity using positions. */
        static MoveWithTranslation(entity: BABYLON.AbstractMesh, velocity: BABYLON.Vector3): void;
        /** Turns entity using rotations. */
        static TurnWithRotation(entity: BABYLON.AbstractMesh, rotation?: number): void;
        /** TODO */
        static GamepadManager: BABYLON.GamepadManager;
        /** TODO */
        static GamepadConnected: (pad: BABYLON.Gamepad, state: BABYLON.EventState) => void;
        /** TODO */
        static GamepadDisconnected: (pad: BABYLON.Gamepad, state: BABYLON.EventState) => void;
        /** Enable user input state in the scene. */
        static EnableUserInput(scene: BABYLON.Scene, options?: {
            preventDefault?: boolean;
            useCapture?: boolean;
            enableVirtualJoystick?: boolean;
            disableRightStick?: boolean;
        }): void;
        /** Disables user input state in the scene. */
        static DisableUserInput(scene: BABYLON.Scene, useCapture?: boolean): void;
        /** Get user input state from the scene. */
        static GetUserInput(input: BABYLON.UserInputAxis, player?: BABYLON.PlayerNumber): number;
        /** TODO */
        static OnKeyboardUp(callback: (keycode: number) => void): void;
        /** TODO */
        static OnKeyboardDown(callback: (keycode: number) => void): void;
        /** TODO */
        static OnKeyboardPress(keycode: number, callback: () => void): void;
        /** TODO */
        static GetKeyboardInput(keycode: number): boolean;
        /** TODO */
        static OnPointerUp(callback: (button: number) => void): void;
        /** TODO */
        static OnPointerDown(callback: (button: number) => void): void;
        /** TODO */
        static OnPointerPress(button: number, callback: () => void): void;
        /** TODO */
        static GetPointerInput(button: number): boolean;
        /** TODO */
        static GetLeftJoystick(): BABYLON.VirtualJoystick;
        /** TODO */
        static GetRightJoystick(): BABYLON.VirtualJoystick;
        /** TODO */
        static GetJoystickPress(button: number): boolean;
        /** TODO */
        static DisposeVirtualJoysticks(): void;
        /** TODO */
        static OnGamepadButtonUp(callback: (button: number) => void, player?: BABYLON.PlayerNumber): void;
        /** TODO */
        static OnGamepadButtonDown(callback: (button: number) => void, player?: BABYLON.PlayerNumber): void;
        /** TODO */
        static OnGamepadButtonPress(button: number, callback: () => void, player?: BABYLON.PlayerNumber): void;
        /** TODO */
        static GetGamepadButtonInput(button: number, player?: BABYLON.PlayerNumber): boolean;
        /** TODO */
        static OnGamepadDirectionUp(callback: (direction: number) => void, player?: BABYLON.PlayerNumber): void;
        /** TODO */
        static OnGamepadDirectionDown(callback: (direction: number) => void, player?: BABYLON.PlayerNumber): void;
        /** TODO */
        static OnGamepadDirectionPress(direction: number, callback: () => void, player?: BABYLON.PlayerNumber): void;
        /** TODO */
        static GetGamepadDirectionInput(direction: number, player?: BABYLON.PlayerNumber): boolean;
        /** TODO */
        static OnGamepadTriggerLeft(callback: (value: number) => void, player?: BABYLON.PlayerNumber): void;
        /** TODO */
        static OnGamepadTriggerRight(callback: (value: number) => void, player?: BABYLON.PlayerNumber): void;
        /** TODO */
        static GetGamepadTriggerInput(trigger: number, player?: BABYLON.PlayerNumber): number;
        /** TODO */
        static GetGamepadType(player?: BABYLON.PlayerNumber): BABYLON.GamepadType;
        /** TODO */
        static GetGamepad(player?: BABYLON.PlayerNumber): BABYLON.Gamepad;
        /** Are xbox live platform services available and user enabled. */
        static IsXboxLivePluginEnabled(): boolean;
        /** Is xbox live user signed in if platform services enabled. */
        static IsXboxLiveUserSignedIn(systemUser?: Windows.System.User, player?: BABYLON.PlayerNumber): boolean;
        /** Validated sign in xbox live user if platform services available. */
        static XboxLiveUserSignIn(player?: BABYLON.PlayerNumber, oncomplete?: (result: Microsoft.Xbox.Services.System.SignInResult) => void, onerror?: (error: any) => void, onprogress?: (progress: any) => void): void;
        /** Silent sign in xbox live user if platform services available. */
        static XboxLiveUserSilentSignIn(player?: BABYLON.PlayerNumber, oncomplete?: (result: Microsoft.Xbox.Services.System.SignInResult) => void, onerror?: (error: any) => void, onprogress?: (progress: any) => void): Windows.Foundation.Projections.Promise<void>;
        /** Dialog sign in xbox live user if platform services available. */
        static XboxLiveUserDialogSignIn(player?: BABYLON.PlayerNumber, oncomplete?: (result: Microsoft.Xbox.Services.System.SignInResult) => void, onerror?: (error: any) => void, onprogress?: (progress: any) => void): Windows.Foundation.Projections.Promise<void>;
        /** Loads a xbox live user profile if platform services available. */
        static LoadXboxLiveUserProfile(player?: BABYLON.PlayerNumber, oncomplete?: (result: Microsoft.Xbox.Services.Social.XboxUserProfile) => void, onerror?: (error: any) => void, onprogress?: (progress: any) => void): Windows.Foundation.Projections.Promise<void>;
        /** Get xbox live user if platform services available. */
        static GetXboxLiveUser(player?: BABYLON.PlayerNumber): Microsoft.Xbox.Services.System.XboxLiveUser;
        /** Get xbox live user if platform services available. */
        static GetXboxLiveSystemUser(systemUser: Windows.System.User, player?: BABYLON.PlayerNumber): Microsoft.Xbox.Services.System.XboxLiveUser;
        /** Get xbox live user context if platform services available. */
        static GetXboxLiveUserContext(player?: BABYLON.PlayerNumber): Microsoft.Xbox.Services.XboxLiveContext;
        /** Resets xbox live user context if platform services available. */
        static ResetXboxLiveUserContext(player?: BABYLON.PlayerNumber): void;
        /** Get xbox live context property if platform services available. */
        static GetXboxLiveContextProperty(name: any): any;
        /** Get xbox live context property if platform services available. */
        static SetXboxLiveContextProperty(name: any, property: any): void;
        /** Resets xbox live property context bag if platform services available. */
        static ResetXboxLivePropertyContexts(): void;
        /** Sets the Xbox User Sign Out Complete Handler */
        static SetXboxLiveSignOutHandler(handler?: (result: Microsoft.Xbox.Services.System.SignOutCompletedEventArgs) => void): void;
        private static input;
        private static keymap;
        private static wheel;
        private static clientx;
        private static clienty;
        private static mousex;
        private static mousey;
        private static vertical;
        private static horizontal;
        private static mousex2;
        private static mousey2;
        private static vertical2;
        private static horizontal2;
        private static mousex3;
        private static mousey3;
        private static vertical3;
        private static horizontal3;
        private static mousex4;
        private static mousey4;
        private static vertical4;
        private static horizontal4;
        private static x_wheel;
        private static x_mousex;
        private static x_mousey;
        private static x_vertical;
        private static x_horizontal;
        private static k_mousex;
        private static k_mousey;
        private static k_vertical;
        private static k_horizontal;
        private static j_mousex;
        private static j_mousey;
        private static j_vertical;
        private static j_horizontal;
        private static g_mousex1;
        private static g_mousey1;
        private static g_vertical1;
        private static g_horizontal1;
        private static g_mousex2;
        private static g_mousey2;
        private static g_vertical2;
        private static g_horizontal2;
        private static g_mousex3;
        private static g_mousey3;
        private static g_vertical3;
        private static g_horizontal3;
        private static g_mousex4;
        private static g_mousey4;
        private static g_vertical4;
        private static g_horizontal4;
        private static mouseButtonPress;
        private static mouseButtonDown;
        private static mouseButtonUp;
        private static keyButtonPress;
        private static keyButtonDown;
        private static keyButtonUp;
        private static leftJoystick;
        private static rightJoystick;
        private static virtualJoystick;
        private static previousPosition;
        private static preventDefault;
        private static rightHanded;
        private static gamepad1;
        private static gamepad1Type;
        private static gamepad1ButtonPress;
        private static gamepad1ButtonDown;
        private static gamepad1ButtonUp;
        private static gamepad1DpadPress;
        private static gamepad1DpadDown;
        private static gamepad1DpadUp;
        private static gamepad1LeftTrigger;
        private static gamepad1RightTrigger;
        private static gamepad2;
        private static gamepad2Type;
        private static gamepad2ButtonPress;
        private static gamepad2ButtonDown;
        private static gamepad2ButtonUp;
        private static gamepad2DpadPress;
        private static gamepad2DpadDown;
        private static gamepad2DpadUp;
        private static gamepad2LeftTrigger;
        private static gamepad2RightTrigger;
        private static gamepad3;
        private static gamepad3Type;
        private static gamepad3ButtonPress;
        private static gamepad3ButtonDown;
        private static gamepad3ButtonUp;
        private static gamepad3DpadPress;
        private static gamepad3DpadDown;
        private static gamepad3DpadUp;
        private static gamepad3LeftTrigger;
        private static gamepad3RightTrigger;
        private static gamepad4;
        private static gamepad4Type;
        private static gamepad4ButtonPress;
        private static gamepad4ButtonDown;
        private static gamepad4ButtonUp;
        private static gamepad4DpadPress;
        private static gamepad4DpadDown;
        private static gamepad4DpadUp;
        private static gamepad4LeftTrigger;
        private static gamepad4RightTrigger;
        private static debugLayerVisible;
        private static updateUserInput;
        private static resetUserInput;
        private static inputKeyDownHandler;
        private static inputKeyUpHandler;
        private static inputPointerWheelHandler;
        private static inputPointerDownHandler;
        private static inputPointerUpHandler;
        private static inputPointerMoveHandler;
        private static inputVirtualJoysticks;
        private static inputOneButtonDownHandler;
        private static inputOneButtonUpHandler;
        private static inputOneXboxDPadDownHandler;
        private static inputOneXboxDPadUpHandler;
        private static inputOneXboxLeftTriggerHandler;
        private static inputOneXboxRightTriggerHandler;
        private static inputOneLeftStickHandler;
        private static inputOneRightStickHandler;
        private static inputTwoButtonDownHandler;
        private static inputTwoButtonUpHandler;
        private static inputTwoXboxDPadDownHandler;
        private static inputTwoXboxDPadUpHandler;
        private static inputTwoXboxLeftTriggerHandler;
        private static inputTwoXboxRightTriggerHandler;
        private static inputTwoLeftStickHandler;
        private static inputTwoRightStickHandler;
        private static inputThreeButtonDownHandler;
        private static inputThreeButtonUpHandler;
        private static inputThreeXboxDPadDownHandler;
        private static inputThreeXboxDPadUpHandler;
        private static inputThreeXboxLeftTriggerHandler;
        private static inputThreeXboxRightTriggerHandler;
        private static inputThreeLeftStickHandler;
        private static inputThreeRightStickHandler;
        private static inputFourButtonDownHandler;
        private static inputFourButtonUpHandler;
        private static inputFourXboxDPadDownHandler;
        private static inputFourXboxDPadUpHandler;
        private static inputFourXboxLeftTriggerHandler;
        private static inputFourXboxRightTriggerHandler;
        private static inputFourLeftStickHandler;
        private static inputFourRightStickHandler;
        private static inputManagerGamepadConnected;
        private static inputManagerGamepadDisconnected;
        private static inputManagerLeftControllerMainButton;
        private static inputManagerLeftControllerPadState;
        private static inputManagerLeftControllerPadValues;
        private static inputManagerLeftControllerAuxButton;
        private static inputManagerLeftControllerTriggered;
        private static inputManagerRightControllerMainButton;
        private static inputManagerRightControllerPadState;
        private static inputManagerRightControllerPadValues;
        private static inputManagerRightControllerAuxButton;
        private static inputManagerRightControllerTriggered;
        private static inputManagerControllerConnected;
    }
}

declare module BABYLON {
    /**
     * Babylon scene manager parser class (Internal use only)
     * @class MetadataParser
     */
    class MetadataParser {
        private _disposeList;
        private _detailList;
        private _physicList;
        private _shadowList;
        private _scriptList;
        private _babylonScene;
        private _gltfLoader;
        readonly loader: BABYLON.GLTF2.GLTFLoader;
        constructor(scene: BABYLON.Scene, loader?: BABYLON.GLTF2.GLTFLoader);
        /** Parse the scene component metadata. Note: Internal use only */
        parseSceneComponents(entity: BABYLON.AbstractMesh): void;
        /** Post process pending scene components. Note: Internal use only */
        postProcessSceneComponents(): void;
        /** Add detail level list item. Note: Internal use only */
        addDetailLevelItem(mesh: BABYLON.AbstractMesh): void;
        /** Add dispose entity list item. Note: Internal use only */
        addDisposeEntityItem(transform: BABYLON.TransformNode): void;
        /** Load float array from gltf accessor data */
        loadFloatAccessorData(context: string, index: number): Promise<Nullable<Float32Array>>;
        /** Load indices array from gltf accessor data */
        loadIndicesAccessorData(context: string, index: number): Promise<BABYLON.IndicesArray>;
        private static DoParseSceneComponents;
        private static DoProcessPendingDisposes;
        private static DoProcessPendingDetails;
        private static DoProcessPendingPhysics;
        private static DoProcessPendingShadows;
        private static DoProcessPendingScripts;
        private static SetupPhysicsComponent;
        private static SetupCameraComponent;
        private static SetupLightComponent;
        /** Creates a safe physics impostor for the specified entity preserving parent child relations. */
        private static CreateEntityPhysicsImpostor;
        private static SetupRigidbodyPhysicsFunction;
    }
}

declare module BABYLON {
    /**
     * Babylon script component class
     * @class ScriptComponent
     */
    class ScriptComponent {
        protected start(): void;
        protected update(): void;
        protected after(): void;
        protected destroy(): void;
        private _before;
        private _after;
        private _properties;
        private _started;
        private _scene;
        private _transform;
        readonly scene: BABYLON.Scene;
        readonly transform: BABYLON.TransformNode;
        constructor(transform: BABYLON.TransformNode, scene: BABYLON.Scene, properties?: any);
        /** Gets the script component class name */
        getClassName(): string;
        /** Sets a script component property bag value */
        setProperty(name: string, propertyValue: any): void;
        /** Gets a script component property bag value */
        getProperty<T>(name: string, defaultValue?: T): T;
        /** Gets the safe transform mesh entity */
        getTransformMesh(): BABYLON.Mesh;
        /** Gets the safe transform abstract mesh entity */
        getAbstractMesh(): BABYLON.AbstractMesh;
        /** Gets the transform collision meshes */
        getCollisionMeshes(): BABYLON.AbstractMesh[];
        /** Gets the transform primitive meshes */
        getPrimitiveMeshes(): BABYLON.AbstractMesh[];
        /** TODO */
        getMetadata(): any;
        /** TODO */
        getComponent<T extends BABYLON.ScriptComponent>(klass: string): T;
        /** TODO */
        getComponents<T extends BABYLON.ScriptComponent>(klass: string): T[];
        /** TODO */
        getParticleRig(): BABYLON.ParticleSystem;
        /** TODO */
        getCameraRig(): BABYLON.Camera;
        /** TODO */
        getLightRig(): BABYLON.Light;
        /** TODO */
        getFlareRig(): BABYLON.LensFlareSystem;
        /** TODO */
        getChildMesh(name: string, searchType?: BABYLON.SearchType, directDecendantsOnly?: boolean, predicate?: (node: BABYLON.Node) => boolean): BABYLON.AbstractMesh;
        /** TODO */
        getChildTransform(name: string, searchType?: BABYLON.SearchType, directDecendantsOnly?: boolean, predicate?: (node: BABYLON.Node) => boolean): BABYLON.AbstractMesh;
        /** Gets the delta time spent between current and previous frame in seconds */
        getDeltaSeconds(): number;
        private registerComponentInstance;
        private destroyComponentInstance;
        private static RegisterInstance;
        private static BeforeInstance;
        private static AfterInstance;
        private static DestroyInstance;
    }
    /**
     * Babylon shuriken particle class
     * @class ShurikenParticleSystem
     */
    class ShurikenParticleSystem extends BABYLON.ScriptComponent {
        constructor(transform: BABYLON.TransformNode, scene: BABYLON.Scene, properties?: any);
        protected start(): void;
        protected update(): void;
        protected after(): void;
        protected destroy(): void;
    }
    /**
     * Babylon character controller class
     * @class CharacterController
     */
    class CharacterController extends BABYLON.ScriptComponent {
        constructor(transform: BABYLON.TransformNode, scene: BABYLON.Scene, properties?: any);
        protected start(): void;
        protected update(): void;
        protected after(): void;
        protected destroy(): void;
    }
    /**
     * Babylon animation state class
     * @class AnimationState
     */
    class AnimationState extends BABYLON.ScriptComponent {
        constructor(transform: BABYLON.TransformNode, scene: BABYLON.Scene, properties?: any);
        protected start(): void;
        protected update(): void;
        protected after(): void;
        protected destroy(): void;
    }
    /**
     * Babylon navigation agent class
     * @class NavigationAgent
     */
    class NavigationAgent extends BABYLON.ScriptComponent {
        readonly info: BABYLON.INavigationAgent;
        readonly hasAgentInfo: boolean;
        private _info;
        constructor(transform: BABYLON.TransformNode, scene: BABYLON.Scene, properties?: any);
        protected start(): void;
        protected update(): void;
        protected after(): void;
        protected destroy(): void;
        /** TODO */
        setDestination(destination: BABYLON.Vector3): void;
    }
}

declare module BABYLON {
    type UniversalMaterial = UniversalPushMaterial | UniversalAlbedoMaterial | UniversalDiffuseMaterial;
    class UniversalShaderDefines {
        private _defines;
        constructor();
        getDefines(): any;
        defineBoolean(name: string): void;
        defineNumeric(name: string, value: number): void;
        static ShaderIndexer: number;
    }
    class UniversalMaterialDefines extends BABYLON.MaterialDefines {
        DIFFUSE: boolean;
        CLIPPLANE: boolean;
        CLIPPLANE2: boolean;
        CLIPPLANE3: boolean;
        CLIPPLANE4: boolean;
        ALPHATEST: boolean;
        DEPTHPREPASS: boolean;
        POINTSIZE: boolean;
        FOG: boolean;
        NORMAL: boolean;
        UV1: boolean;
        UV2: boolean;
        VERTEXCOLOR: boolean;
        VERTEXALPHA: boolean;
        NUM_BONE_INFLUENCERS: number;
        BonesPerMesh: number;
        INSTANCES: boolean;
        constructor();
    }
    class UniversalAlbedoChunks {
        constructor();
        Vertex_Begin: string;
        Vertex_Definitions: string;
        Vertex_MainBegin: string;
        Vertex_Before_PositionUpdated: string;
        Vertex_Before_NormalUpdated: string;
        Vertex_MainEnd: string;
        Fragment_Begin: string;
        Fragment_Definitions: string;
        Fragment_MainBegin: string;
        Fragment_Custom_Albedo: string;
        Fragment_Custom_Alpha: string;
        Fragment_Before_Lights: string;
        Fragment_Before_Fog: string;
        Fragment_Before_FragColor: string;
        Fragment_MetallicRoughness: string;
        Fragment_MicroSurface: string;
    }
    class UniversalDiffuseChunks {
        constructor();
        Vertex_Begin: string;
        Vertex_Definitions: string;
        Vertex_MainBegin: string;
        Vertex_Before_PositionUpdated: string;
        Vertex_Before_NormalUpdated: string;
        Vertex_MainEnd: string;
        Fragment_Begin: string;
        Fragment_Definitions: string;
        Fragment_MainBegin: string;
        Fragment_Custom_Diffuse: string;
        Fragment_Custom_Alpha: string;
        Fragment_Before_Lights: string;
        Fragment_Before_Fog: string;
        Fragment_Before_FragColor: string;
    }
    class UniversalShaderMaterial {
        static Initialize(material: BABYLON.ShaderMaterial, binding?: boolean): void;
    }
    /**
     * Babylon universal push material
     * @class UniversalPushMaterial
     */
    class UniversalPushMaterial extends BABYLON.PushMaterial {
        private _diffuseTexture;
        diffuseTexture: BABYLON.BaseTexture;
        diffuseColor: Color3;
        private _disableLighting;
        disableLighting: boolean;
        private _maxSimultaneousLights;
        maxSimultaneousLights: number;
        customShaderNameResolve: (shaderName: string, uniforms: string[], uniformBuffers: string[], samplers: string[], defines: BABYLON.UniversalMaterialDefines) => string;
        protected locals: BABYLON.UniversalShaderDefines;
        private _defines;
        private _uniforms;
        private _samplers;
        private _textures;
        private _vectors4;
        private _floats;
        private _renderId;
        constructor(name: string, scene: BABYLON.Scene);
        getClassName(): string;
        getShaderName(): string;
        getShaderDefines(): BABYLON.UniversalMaterialDefines;
        needAlphaBlending(): boolean;
        needAlphaTesting(): boolean;
        getAlphaTestTexture(): BABYLON.Nullable<BABYLON.BaseTexture>;
        getTexture(name: string): BABYLON.Texture;
        getVector4(name: string): BABYLON.Vector4;
        getFloat(name: string): number;
        setTexture(name: string, texture: BABYLON.Texture, initialize?: boolean): BABYLON.UniversalPushMaterial;
        setVector4(name: string, value: BABYLON.Vector4, initialize?: boolean): BABYLON.UniversalPushMaterial;
        setFloat(name: string, value: number, initialize?: boolean): BABYLON.UniversalPushMaterial;
        checkUniform(uniformName: string): void;
        checkSampler(samplerName: string): void;
        isReadyForSubMesh(mesh: BABYLON.AbstractMesh, subMesh: BABYLON.SubMesh, useInstances?: boolean): boolean;
        bindForSubMesh(world: BABYLON.Matrix, mesh: BABYLON.Mesh, subMesh: BABYLON.SubMesh): void;
        getAnimatables(): BABYLON.IAnimatable[];
        getActiveTextures(): BABYLON.BaseTexture[];
        hasTexture(texture: BABYLON.BaseTexture): boolean;
        dispose(forceDisposeEffect?: boolean): void;
        clone(cloneName: string): BABYLON.UniversalPushMaterial;
        serialize(): any;
        static Parse(source: any, scene: BABYLON.Scene, rootUrl: string): BABYLON.UniversalPushMaterial;
        private _buildCustomShader;
        private _attachAfterBind;
    }
    /**
     * Babylon universal albedo material
     * @class UniversalAlbedoMaterial
     */
    class UniversalAlbedoMaterial extends BABYLON.PBRMaterial {
        protected locals: BABYLON.UniversalShaderDefines;
        private _defines;
        private _uniforms;
        private _samplers;
        private _textures;
        private _vectors4;
        private _floats;
        private _isCreatedShader;
        private _createdShaderName;
        private _enableShaderChunks;
        private _materialShaderChunks;
        constructor(name: string, scene: Scene);
        getClassName(): string;
        getShaderName(): string;
        getShaderChunk(): string;
        getShaderDefines(): BABYLON.PBRMaterialDefines;
        getTexture(name: string): BABYLON.Texture;
        getVector4(name: string): BABYLON.Vector4;
        getFloat(name: string): number;
        setTexture(name: string, texture: BABYLON.Texture, initialize?: boolean): BABYLON.UniversalAlbedoMaterial;
        setVector4(name: string, value: BABYLON.Vector4, initialize?: boolean): BABYLON.UniversalAlbedoMaterial;
        setFloat(name: string, value: number, initialize?: boolean): BABYLON.UniversalAlbedoMaterial;
        checkUniform(uniformName: string): void;
        checkSampler(samplerName: string): void;
        getAnimatables(): IAnimatable[];
        getActiveTextures(): BaseTexture[];
        hasTexture(texture: BaseTexture): boolean;
        dispose(forceDisposeEffect?: boolean, forceDisposeTextures?: boolean): void;
        clone(cloneName: string): BABYLON.UniversalAlbedoMaterial;
        serialize(): any;
        static Parse(source: any, scene: BABYLON.Scene, rootUrl: string): BABYLON.UniversalAlbedoMaterial;
        protected customShaderChunkResolve(): void;
        private _buildCustomShader;
        private _createShaderChunks;
        private _attachAfterBind;
        private _setupAttachAfterBind;
    }
    /**
     * Babylon universal diffuse material
     * @class UniversalDiffuseMaterial
     */
    class UniversalDiffuseMaterial extends BABYLON.StandardMaterial {
        protected locals: BABYLON.UniversalShaderDefines;
        private _defines;
        private _uniforms;
        private _samplers;
        private _textures;
        private _vectors4;
        private _floats;
        private _isCreatedShader;
        private _createdShaderName;
        private _enableShaderChunks;
        private _materialShaderChunks;
        constructor(name: string, scene: Scene);
        getClassName(): string;
        getShaderName(): string;
        getShaderChunk(): string;
        getShaderDefines(): BABYLON.StandardMaterialDefines;
        getTexture(name: string): BABYLON.Texture;
        getVector4(name: string): BABYLON.Vector4;
        getFloat(name: string): number;
        setTexture(name: string, texture: BABYLON.Texture, initialize?: boolean): BABYLON.UniversalDiffuseMaterial;
        setVector4(name: string, value: BABYLON.Vector4, initialize?: boolean): BABYLON.UniversalDiffuseMaterial;
        setFloat(name: string, value: number, initialize?: boolean): BABYLON.UniversalDiffuseMaterial;
        checkUniform(uniformName: string): void;
        checkSampler(samplerName: string): void;
        getAnimatables(): IAnimatable[];
        getActiveTextures(): BaseTexture[];
        hasTexture(texture: BaseTexture): boolean;
        dispose(forceDisposeEffect?: boolean, forceDisposeTextures?: boolean): void;
        clone(cloneName: string): BABYLON.UniversalDiffuseMaterial;
        serialize(): any;
        static Parse(source: any, scene: BABYLON.Scene, rootUrl: string): BABYLON.UniversalDiffuseMaterial;
        protected customShaderChunkResolve(): void;
        private _buildCustomShader;
        private _createShaderChunks;
        private _attachAfterBind;
        private _setupAttachAfterBind;
    }
}

declare var Ammo: any;
declare class Navigation {
    buildNodes(mesh: BABYLON.AbstractMesh): any;
    setZoneData(zone: string, data: any): void;
    getGroup(zone: string, position: BABYLON.Vector3): number;
    getRandomNode(zone: string, group: number, nearPosition: BABYLON.Vector3, nearRange: number): BABYLON.Vector3;
    projectOnNavmesh(position: BABYLON.Vector3, zone: string, group: number): BABYLON.Vector3;
    findPath(startPosition: BABYLON.Vector3, targetPosition: BABYLON.Vector3, zone: string, group: number): BABYLON.Vector3[];
    getVectorFrom(vertices: number[], index: number, _vector: BABYLON.Vector3): BABYLON.Vector3;
}
declare module BABYLON {
    enum System {
        Deg2Rad = 0.0174532924,
        Rad2Deg = 57.29578
    }
    enum Handedness {
        Default = -1,
        Right = 0,
        Left = 1
    }
    enum SearchType {
        ExactMatch = 0,
        StartsWith = 1,
        EndsWith = 2,
        IndexOf = 3
    }
    enum PlayerNumber {
        One = 1,
        Two = 2,
        Three = 3,
        Four = 4
    }
    enum GamepadType {
        None = -1,
        Generic = 0,
        Xbox360 = 1
    }
    enum JoystickButton {
        Left = 0,
        Right = 1
    }
    enum Xbox360Trigger {
        Left = 0,
        Right = 1
    }
    enum MovementType {
        DirectVelocity = 0,
        AppliedForces = 1,
        CheckCollision = 2
    }
    enum CollisionContact {
        Top = 0,
        Left = 1,
        Right = 2,
        Bottom = 3
    }
    interface INavigationArea {
        index: number;
        area: string;
        cost: number;
    }
    interface INavigationAgent {
        name: string;
        radius: number;
        height: number;
        speed: number;
        acceleration: number;
        angularSpeed: number;
        areaMask: number;
        autoBraking: boolean;
        autoTraverseOffMeshLink: boolean;
        avoidancePriority: number;
        baseOffset: number;
        obstacleAvoidanceType: string;
        stoppingDistance: number;
    }
    interface INavigationLink {
        name: string;
        activated: boolean;
        area: number;
        autoUpdatePositions: boolean;
        biDirectional: boolean;
        costOverride: number;
        occupied: boolean;
        start: any;
        end: any;
    }
    interface INavigationObstacle {
        name: string;
        carving: boolean;
        carveOnlyStationary: boolean;
        carvingMoveThreshold: number;
        carvingTimeToStationary: number;
        shap: string;
        radius: number;
        center: number[];
        size: number[];
    }
    enum UserInputPointer {
        Left = 0,
        Middle = 1,
        Right = 2
    }
    enum UserInputAxis {
        Horizontal = 0,
        Vertical = 1,
        ClientX = 2,
        ClientY = 3,
        MouseX = 4,
        MouseY = 5,
        Wheel = 6
    }
    enum CollisionFlags {
        CF_STATIC_OBJECT = 1,
        CF_KINEMATIC_OBJECT = 2,
        CF_NO_CONTACT_RESPONSE = 4,
        CF_CUSTOM_MATERIAL_CALLBACK = 8,
        CF_CHARACTER_OBJECT = 16,
        CF_DISABLE_VISUALIZE_OBJECT = 32,
        CF_DISABLE_SPU_COLLISION_PROCESSING = 64,
        CF_HAS_CONTACT_STIFFNESS_DAMPING = 128,
        CF_HAS_CUSTOM_DEBUG_RENDERING_COLOR = 256,
        CF_HAS_FRICTION_ANCHOR = 512,
        CF_HAS_COLLISION_SOUND_TRIGGER = 1024
    }
    enum UserInputKey {
        BackSpace = 8,
        Tab = 9,
        Enter = 13,
        Shift = 16,
        Ctrl = 17,
        Alt = 18,
        Pause = 19,
        Break = 19,
        CapsLock = 20,
        Escape = 27,
        SpaceBar = 32,
        PageUp = 33,
        PageDown = 34,
        End = 35,
        Home = 36,
        LeftArrow = 37,
        UpArrow = 38,
        RightArrow = 39,
        DownArrow = 40,
        Insert = 45,
        Delete = 46,
        Num0 = 48,
        Num1 = 49,
        Num2 = 50,
        Num3 = 51,
        Num4 = 52,
        Num5 = 53,
        Num6 = 54,
        Num7 = 55,
        Num8 = 56,
        Num9 = 57,
        A = 65,
        B = 66,
        C = 67,
        D = 68,
        E = 69,
        F = 70,
        G = 71,
        H = 72,
        I = 73,
        J = 74,
        K = 75,
        L = 76,
        M = 77,
        N = 78,
        O = 79,
        P = 80,
        Q = 81,
        R = 82,
        S = 83,
        T = 84,
        U = 85,
        V = 86,
        W = 87,
        X = 88,
        Y = 89,
        Z = 90,
        LeftWindowKey = 91,
        RightWindowKey = 92,
        SelectKey = 93,
        Numpad0 = 96,
        Numpad1 = 97,
        Numpad2 = 98,
        Numpad3 = 99,
        Numpad4 = 100,
        Numpad5 = 101,
        Numpad6 = 102,
        Numpad7 = 103,
        Numpad8 = 104,
        Numpad9 = 105,
        Multiply = 106,
        Add = 107,
        Subtract = 109,
        DecimalPoint = 110,
        Divide = 111,
        F1 = 112,
        F2 = 113,
        F3 = 114,
        F4 = 115,
        F5 = 116,
        F6 = 117,
        F7 = 118,
        F8 = 119,
        F9 = 120,
        F10 = 121,
        F11 = 122,
        F12 = 123,
        NumLock = 144,
        ScrollLock = 145,
        SemiColon = 186,
        EqualSign = 187,
        Comma = 188,
        Dash = 189,
        Period = 190,
        ForwardSlash = 191,
        GraveAccent = 192,
        OpenBracket = 219,
        BackSlash = 220,
        CloseBraket = 221,
        SingleQuote = 222
    }
    interface UserInputPress {
        index: number;
        action: () => void;
    }
    type UserInputAction = (index: number) => void;
    class UserInputOptions {
        static JoystickRightHandleColor: string;
        static JoystickLeftSensibility: number;
        static JoystickRightSensibility: number;
        static JoystickDeadStickValue: number;
        static GamepadDeadStickValue: number;
        static GamepadLStickXInverted: boolean;
        static GamepadLStickYInverted: boolean;
        static GamepadRStickXInverted: boolean;
        static GamepadRStickYInverted: boolean;
        static GamepadLStickSensibility: number;
        static GamepadRStickSensibility: number;
        static PointerAngularSensibility: number;
        static PointerWheelDeadZone: number;
    }
    /**
     * Babylon utility class
     * @class Utilities
     */
    class Utilities {
        private static UpVector;
        private static ZeroVector;
        private static TempMatrix;
        private static TempVector2;
        private static TempVector3;
        private static PrintElement;
        static Angle(from: BABYLON.Vector3, to: BABYLON.Vector3): number;
        /** TODO */
        static ClampAngle(angle: number, min: number, max: number): number;
        /** Returns a new radion converted from degree */
        static Deg2Rad(degree: number): number;
        /** Returns a new degree converted from radion */
        static Rad2Deg(radion: number): number;
        /** Returns a new Quaternion set from the passed Euler float angles (x, y, z). */
        static Euler(eulerX: number, eulerY: number, eulerZ: number): BABYLON.Quaternion;
        /** Returns a new Quaternion set from the passed Euler float angles (x, y, z). */
        static EulerToRef(eulerX: number, eulerY: number, eulerZ: number, result: BABYLON.Quaternion): void;
        /** Returns a new Matrix as a rotation matrix from the Euler angles (x, y, z). */
        static Matrix(eulerX: number, eulerY: number, eulerZ: number): BABYLON.Matrix;
        /** Returns a new Matrix as a rotation matrix from the Euler angles (x, y, z). */
        static MatrixToRef(eulerX: number, eulerY: number, eulerZ: number, result: BABYLON.Matrix): void;
        /** Multplies a quaternion by a vector (rotates vector) */
        static RotateVector(vec: BABYLON.Vector3, quat: BABYLON.Quaternion): BABYLON.Vector3;
        /** Multplies a quaternion by a vector (rotates vector) */
        static RotateVectorToRef(vec: BABYLON.Vector3, quat: BABYLON.Quaternion, result: BABYLON.Vector3): void;
        /** Returns a new Quaternion set from the passed vector position. */
        static LookRotation(position: BABYLON.Vector3): BABYLON.Quaternion;
        /** Returns a new Quaternion set from the passed vector position. */
        static LookRotationToRef(position: BABYLON.Vector3, result: BABYLON.Quaternion): void;
        /** TODO */
        static DownloadEnvironment(cubemap: BABYLON.CubeTexture, success?: () => void, failure?: () => void): void;
        static HasOwnProperty(object: any, property: string): boolean;
        static GetFilenameFromUrl(url: string): string;
        /** TODO */
        static PrintToScreen(text: string, color?: string): void;
        /** TODO */
        static StartsWith(source: string, word: string): boolean;
        /** TODO */
        static EndsWith(source: string, word: string): boolean;
        /** TODO */
        static ReplaceAll(source: string, word: string, replace: string): string;
        /** TODO */
        static IsNullOrEmpty(source: string): boolean;
        /** TODO */
        static SafeStringPush(array: string[], value: string): void;
        /** TODO */
        static ParseColor3(source: any, defaultValue?: BABYLON.Color3): BABYLON.Color3;
        /** TODO */
        static ParseColor4(source: any, defaultValue?: BABYLON.Color4): BABYLON.Color4;
        /** TODO */
        static ParseVector2(source: any, defaultValue?: BABYLON.Vector2): BABYLON.Vector2;
        /** TODO */
        static ParseVector3(source: any, defaultValue?: BABYLON.Vector3): BABYLON.Vector3;
        /** TODO */
        static ParseVector4(source: any, defaultValue?: BABYLON.Vector4): BABYLON.Vector4;
        /** Transforms position from local space to world space. */
        static TransformPosition(owner: BABYLON.AbstractMesh | BABYLON.Camera, position: BABYLON.Vector3): BABYLON.Vector3;
        /** Transforms position from local space to world space. */
        static TransformPositionToRef(owner: BABYLON.AbstractMesh | BABYLON.Camera, position: BABYLON.Vector3, result: BABYLON.Vector3): void;
        /** Transforms direction from local space to world space. */
        static TransformDirection(owner: BABYLON.AbstractMesh | BABYLON.Camera, direction: BABYLON.Vector3): BABYLON.Vector3;
        /** Transforms direction from local space to world space. */
        static TransformDirectionToRef(owner: BABYLON.AbstractMesh | BABYLON.Camera, direction: BABYLON.Vector3, result: BABYLON.Vector3): void;
        /** Recomputes the meshes bounding center pivot point */
        static RecomputePivotPoint(owner: BABYLON.AbstractMesh): void;
        /** Gets any direction vector of the owner in world space. */
        static GetDirectionVector(owner: BABYLON.AbstractMesh | BABYLON.Camera, vector: BABYLON.Vector3): BABYLON.Vector3;
        /** Gets any direction vector of the owner in world space. */
        static GetDirectionVectorToRef(owner: BABYLON.AbstractMesh | BABYLON.Camera, vector: BABYLON.Vector3, result: BABYLON.Vector3): void;
        /** Gets the blue axis of the owner in world space. */
        static GetForwardVector(owner: BABYLON.AbstractMesh | BABYLON.Camera): BABYLON.Vector3;
        /** Gets the blue axis of the owner in world space. */
        static GetForwardVectorToRef(owner: BABYLON.AbstractMesh | BABYLON.Camera, result: BABYLON.Vector3): void;
        /** Gets the red axis of the owner in world space. */
        static GetRightVector(owner: BABYLON.AbstractMesh | BABYLON.Camera): BABYLON.Vector3;
        /** Gets the red axis of the owner in world space. */
        static GetRightVectorToRef(owner: BABYLON.AbstractMesh | BABYLON.Camera, result: BABYLON.Vector3): void;
        /** Gets the green axis of the owner in world space. */
        static GetUpVector(owner: BABYLON.AbstractMesh | BABYLON.Camera): BABYLON.Vector3;
        /** Gets the green axis of the owner in world space. */
        static GetUpVectorToRef(owner: BABYLON.AbstractMesh | BABYLON.Camera, result: BABYLON.Vector3): void;
        /** Set the passed matrix "result" as the sampled key frame value for the specfied animation track. */
        static SampleAnimationMatrix(animation: BABYLON.Animation, frame: number, loopMode: number, result: BABYLON.Matrix): void;
        /** Gets the float "result" as the sampled key frame value for the specfied animation track. */
        static SampleAnimationFloat(animation: BABYLON.Animation, frame: number, repeatCount: number, loopMode: number, offsetValue?: any, highLimitValue?: any): number;
        /** Set the passed matrix "result" as the interpolated values for "gradient" (float) between the ones of the matrices "startValue" and "endValue". */
        static FastMatrixLerp(startValue: BABYLON.Matrix, endValue: BABYLON.Matrix, gradient: number, result: BABYLON.Matrix): void;
        /** Set the passed matrix "result" as the spherical interpolated values for "gradient" (float) between the ones of the matrices "startValue" and "endValue". */
        static FastMatrixSlerp(startValue: BABYLON.Matrix, endValue: BABYLON.Matrix, gradient: number, result: BABYLON.Matrix): void;
        /** Set the passed matrix "result" as the interpolated values for animation key frame sampling. */
        static FastMatrixInterpolate(animation: BABYLON.Animation, currentFrame: number, loopMode: number, result: BABYLON.Matrix): void;
        /** Returns float result as the interpolated values for animation key frame sampling. */
        static FastFloatInterpolate(animation: BABYLON.Animation, currentFrame: number, repeatCount: number, loopMode: number, offsetValue?: any, highLimitValue?: any): number;
        /** Formats a string version of a physics imposter type */
        static FormatPhysicsImposterType(type: number): string;
        /** TODO */
        static SetAnimationLooping(owner: BABYLON.IAnimatable, loopBehavior: number): void;
        /** TODO */
        static SetSkeletonLooping(skeleton: BABYLON.Skeleton, loopBehavior: number): void;
        /** TODO */
        static SetSkeletonBlending(skeleton: BABYLON.Skeleton, blendingSpeed: number): void;
        /** TODO */
        static SetSkeletonProperties(skeleton: BABYLON.Skeleton, loopBehavior: number, blendingSpeed: number): void;
        /** Computes the transition duration blending speed */
        static ComputeBlendingSpeed(rate: number, duration: number): number;
        static CalculateCameraDistance(farClipPlane: number, lodPercent: number, clipPlaneScale?: number): number;
        /** TODO */
        static InstantiateClass(className: string): any;
        /** TODO */
        static DisposeEntity(entity: BABYLON.AbstractMesh): void;
        /** TODO */
        static FindMesh(name: string, meshes: BABYLON.AbstractMesh[], searchType?: BABYLON.SearchType): BABYLON.AbstractMesh;
        static CreateGuid(suffix?: string): string;
        static ValidateTransformGuid(node: TransformNode): void;
        /** TODO */
        static CloneValue(source: any, destinationObject: any): any;
        /** TODO */
        static CloneMetadata(source: any): any;
        /** TODO */
        static DeepCopyProperties(source: any, destination: any, doNotCopyList?: string[], mustCopyList?: string[]): void;
        /** TODO */
        static ValidateTransformMetadata(transform: BABYLON.TransformNode): void;
    }
}
/**
 * RequestAnimationFrame() Original Shim By: Paul Irish (Internal use only)
 * http://paulirish.com/2011/requestanimationframe-for-smart-animating/
 * @class TimerPlugin
 */
declare var TimerPlugin: any;

declare const CVTOOLS_NAME = "CVTOOLS_unity_metadata";
declare const CVTOOLS_MESH = "CVTOOLS_babylon_mesh";
declare const CVTOOLS_HAND = "CVTOOLS_left_handed";
/**
 * Babylon Editor Toolkit - Loader Class
 * @class CVTOOLS_unity_metadata
 * [Specification](https://github.com/MackeyK24/glTF/tree/master/extensions/2.0/Vendor/CVTOOLS_unity_metadata)
 */
declare class CVTOOLS_unity_metadata implements BABYLON.GLTF2.IGLTFLoaderExtension {
    /** The name of this extension. */
    readonly name = "CVTOOLS_unity_metadata";
    /** Defines whether this extension is enabled. */
    enabled: boolean;
    private _loader;
    private _parser;
    private _parseScene;
    private _leftHanded;
    private _disposeRoot;
    private _sceneParsed;
    private _rootUrl;
    /** @hidden */
    constructor(loader: BABYLON.GLTF2.GLTFLoader);
    /** @hidden */
    dispose(): void;
    /** @hidden */
    onLoading(): void;
    /** @hidden */
    onReady(): void;
    /** @hidden */
    loadSceneAsync(context: string, scene: BABYLON.GLTF2.IScene): BABYLON.Nullable<Promise<void>>;
    /** @hidden */
    loadNodeAsync(context: string, node: BABYLON.GLTF2.INode, assign: (babylonMesh: BABYLON.TransformNode) => void): BABYLON.Nullable<Promise<BABYLON.TransformNode>>;
    /** @hidden */
    loadMaterialPropertiesAsync(context: string, material: BABYLON.GLTF2.IMaterial, babylonMaterial: BABYLON.Material): BABYLON.Nullable<Promise<void>>;
    /** @hidden */
    createMaterial(context: string, material: BABYLON.GLTF2.IMaterial, babylonDrawMode: number): BABYLON.Nullable<BABYLON.Material>;
    /** @hidden */
    _loadMeshPrimitiveAsync(context: string, name: string, node: BABYLON.GLTF2.INode, mesh: BABYLON.GLTF2.IMesh, primitive: BABYLON.GLTF2.IMeshPrimitive, assign: (babylonMesh: BABYLON.AbstractMesh) => void): Promise<BABYLON.AbstractMesh>;
    private _setupBabylonMesh;
    private _setupBabylonMaterials;
    private _parseSceneProperties;
    private _parseMultiMaterialAsync;
    private _parseShaderMaterialPropertiesAsync;
    private _parseAlbedoMaterialPropertiesAsync;
    private _parseDiffuseMaterialPropertiesAsync;
    private _parseCommonConstantProperties;
}
/**
 * Babylon Editor Toolkit - Loader Class
 * @class CVTOOLS_babylon_mesh
 * [Specification](https://github.com/MackeyK24/glTF/tree/master/extensions/2.0/Vendor/CVTOOLS_unity_metadata)
 */
declare class CVTOOLS_babylon_mesh implements BABYLON.GLTF2.IGLTFLoaderExtension {
    /** The name of this extension. */
    readonly name = "CVTOOLS_babylon_mesh";
    /** Defines whether this extension is enabled. */
    enabled: boolean;
    private _loader;
    /** @hidden */
    constructor(loader: BABYLON.GLTF2.GLTFLoader);
    /** @hidden */
    dispose(): void;
}
/**
 * Babylon Editor Toolkit - Loader Class
 * @class CVTOOLS_left_handed
 * [Specification](https://github.com/MackeyK24/glTF/tree/master/extensions/2.0/Vendor/CVTOOLS_unity_metadata)
 */
declare class CVTOOLS_left_handed implements BABYLON.GLTF2.IGLTFLoaderExtension {
    /** The name of this extension. */
    readonly name = "CVTOOLS_left_handed";
    /** Defines whether this extension is enabled. */
    enabled: boolean;
    private _loader;
    /** @hidden */
    constructor(loader: BABYLON.GLTF2.GLTFLoader);
    /** @hidden */
    dispose(): void;
}
