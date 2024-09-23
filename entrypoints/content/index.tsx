import "./style.css";

export default defineContentScript({
  matches: ["*://*.kubernetes.io/*"],

  async main() {
    console.log("Hello from Kubernetes Dark Mode!");
    console.log(
      "Source Code is available at https://github.com/aptakube/crx-kubernetes-darkmode"
    );
  },
});
