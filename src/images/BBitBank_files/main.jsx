import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/main.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=b72d4324"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
let prevRefreshReg;
let prevRefreshSig;
if (import.meta.hot && !inWebWorker) {
  if (!window.__vite_plugin_react_preamble_installed__) {
    throw new Error("@vitejs/plugin-react can't detect preamble. Something is wrong. See https://github.com/vitejs/vite-plugin-react/pull/11#discussion_r430879201");
  }
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    RefreshRuntime.register(type, "C:/Users/DELL/Desktop/New folder/zzzz/Bank_proj/client/src/main.jsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=b72d4324"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react; const useState = __vite__cjsImport3_react["useState"];
import __vite__cjsImport4_reactDom_client from "/node_modules/.vite/deps/react-dom_client.js?v=b72d4324"; const ReactDOM = __vite__cjsImport4_reactDom_client.__esModule ? __vite__cjsImport4_reactDom_client.default : __vite__cjsImport4_reactDom_client;
import App from "/src/App.jsx";
import "/src/index.css";
import "/src/styles/App.css";
import __vite__cjsImport8_react from "/node_modules/.vite/deps/react.js?v=b72d4324"; const createContext = __vite__cjsImport8_react["createContext"];
export const server = "http://localhost:5000/api/v1";
export const context = createContext({ isAuthenticated: false });
const Appwrapper = () => {
  _s();
  const [isAuthenticated, setisAuthenticated] = useState(false);
  const [loading, setloading] = useState(false);
  const [user, setuser] = useState({ user: null });
  return /* @__PURE__ */ jsxDEV(context.Provider, { value: { isAuthenticated, setisAuthenticated, loading, setloading, user, setuser }, children: /* @__PURE__ */ jsxDEV(App, {}, void 0, false, {
    fileName: "C:/Users/DELL/Desktop/New folder/zzzz/Bank_proj/client/src/main.jsx",
    lineNumber: 21,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "C:/Users/DELL/Desktop/New folder/zzzz/Bank_proj/client/src/main.jsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
};
_s(Appwrapper, "H/HpnyguBW6n+A6+Y/GXuC+g2J4=");
_c = Appwrapper;
ReactDOM.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxDEV(React.StrictMode, { children: /* @__PURE__ */ jsxDEV(Appwrapper, {}, void 0, false, {
    fileName: "C:/Users/DELL/Desktop/New folder/zzzz/Bank_proj/client/src/main.jsx",
    lineNumber: 29,
    columnNumber: 5
  }, this) }, void 0, false, {
    fileName: "C:/Users/DELL/Desktop/New folder/zzzz/Bank_proj/client/src/main.jsx",
    lineNumber: 28,
    columnNumber: 3
  }, this)
);
var _c;
$RefreshReg$(_c, "Appwrapper");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("C:/Users/DELL/Desktop/New folder/zzzz/Bank_proj/client/src/main.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports)
        return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate(currentExports, nextExports);
      if (invalidateMessage)
        import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBb0JNOzJCQXBCTjtBQUFnQkEsTUFBUSxjQUFlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3ZDLE9BQU9DLGNBQWM7QUFDckIsT0FBT0MsU0FBUztBQUNoQixPQUFPO0FBQ1AsT0FBTztBQUNQLFNBQVNDLHFCQUFxQjtBQUd2QixhQUFNQyxTQUFTO0FBRWYsYUFBTUMsVUFBVUYsY0FBYyxFQUFFRyxpQkFBaUIsTUFBTSxDQUFDO0FBRS9ELE1BQU1DLGFBQWFBLE1BQU07QUFBQUMsS0FBQTtBQUV2QixRQUFNLENBQUNGLGlCQUFpQkcsa0JBQWtCLElBQUlULFNBQVMsS0FBSztBQUM1RCxRQUFNLENBQUNVLFNBQVNDLFVBQVUsSUFBSVgsU0FBUyxLQUFLO0FBQzVDLFFBQU0sQ0FBQ1ksTUFBTUMsT0FBTyxJQUFJYixTQUFTLEVBQUNZLE1BQU8sS0FBSSxDQUFDO0FBRTlDLFNBQ0UsdUJBQUMsUUFBUSxVQUFSLEVBQWlCLE9BQU8sRUFBQ04saUJBQWdCRyxvQkFBbUJDLFNBQVFDLFlBQVdDLE1BQUtDLFFBQU8sR0FDMUYsaUNBQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUksS0FETjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBRUE7QUFHSjtBQUFDTCxHQVpLRCxZQUFVO0FBQUFPLEtBQVZQO0FBY05OLFNBQVNjLFdBQVdDLFNBQVNDLGVBQWUsTUFBTSxDQUFDLEVBQUVDO0FBQUFBLEVBQ25ELHVCQUFDLE1BQU0sWUFBTixFQUNDLGlDQUFDLGdCQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBVyxLQURiO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FFQTtBQUNGO0FBQUMsSUFBQUo7QUFBQUssYUFBQUwsSUFBQSIsIm5hbWVzIjpbInVzZVN0YXRlIiwiUmVhY3RET00iLCJBcHAiLCJjcmVhdGVDb250ZXh0Iiwic2VydmVyIiwiY29udGV4dCIsImlzQXV0aGVudGljYXRlZCIsIkFwcHdyYXBwZXIiLCJfcyIsInNldGlzQXV0aGVudGljYXRlZCIsImxvYWRpbmciLCJzZXRsb2FkaW5nIiwidXNlciIsInNldHVzZXIiLCJfYyIsImNyZWF0ZVJvb3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicmVuZGVyIiwiJFJlZnJlc2hSZWckIl0sInNvdXJjZXMiOlsibWFpbi5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tL2NsaWVudCdcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAuanN4J1xuaW1wb3J0ICcuL2luZGV4LmNzcydcbmltcG9ydCBcIi4vc3R5bGVzL0FwcC5jc3NcIlxuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiXG5cblxuZXhwb3J0IGNvbnN0IHNlcnZlciA9IFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS92MVwiO1xuXG5leHBvcnQgY29uc3QgY29udGV4dCA9IGNyZWF0ZUNvbnRleHQoeyBpc0F1dGhlbnRpY2F0ZWQ6IGZhbHNlIH0pXG5cbmNvbnN0IEFwcHdyYXBwZXIgPSAoKSA9PiB7XG5cbiAgY29uc3QgW2lzQXV0aGVudGljYXRlZCwgc2V0aXNBdXRoZW50aWNhdGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldGxvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbdXNlciwgc2V0dXNlcl0gPSB1c2VTdGF0ZSh7dXNlciA6IG51bGx9KTtcblxuICByZXR1cm4gKFxuICAgIDxjb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7aXNBdXRoZW50aWNhdGVkLHNldGlzQXV0aGVudGljYXRlZCxsb2FkaW5nLHNldGxvYWRpbmcsdXNlcixzZXR1c2VyfX0+XG4gICAgICA8QXBwIC8+XG4gICAgPC9jb250ZXh0LlByb3ZpZGVyPlxuICApXG5cbn1cblxuUmVhY3RET00uY3JlYXRlUm9vdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKS5yZW5kZXIoXG4gIDxSZWFjdC5TdHJpY3RNb2RlPlxuICAgIDxBcHB3cmFwcGVyIC8+XG4gIDwvUmVhY3QuU3RyaWN0TW9kZT4sXG4pXG4iXSwiZmlsZSI6IkM6L1VzZXJzL0RFTEwvRGVza3RvcC9OZXcgZm9sZGVyL3p6enovQmFua19wcm9qL2NsaWVudC9zcmMvbWFpbi5qc3gifQ==