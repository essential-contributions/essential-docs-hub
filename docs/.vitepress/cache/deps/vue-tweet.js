import {
  Fragment,
  createBaseVNode,
  createCommentVNode,
  createElementBlock,
  defineComponent,
  mergeProps,
  nextTick,
  onMounted,
  openBlock,
  ref,
  renderSlot,
  toRef,
  watch
} from "./chunk-L2JNJ22P.js";

// node_modules/vue-tweet/dist/vue-tweet.js
var B = defineComponent({
  __name: "vue-tweet",
  props: {
    /**
    The numerical ID of the desired Tweet.
    
    @example
      <TweetEmbed tweetId="20" />
     */
    tweetId: {
      type: String,
      default: ""
    },
    /**
      The Tweet URL.
    
      @example
        <TweetEmbed tweetId="https://x.com/jack/status/20" />
      */
    tweetUrl: {
      type: String,
      default: ""
    },
    /**
     * When set to none, only the cited Tweet will be displayed even if it is in reply to another Tweet.
     * @default "all"
     */
    conversation: {
      type: String,
      default: "all",
      validator: (e) => ["all", "none"].includes(e)
    },
    /**
     * When set to hidden, links in a Tweet are not expanded to photo, video, or link previews.
     * @default "visible"
     */
    cards: {
      type: String,
      default: "visible",
      validator: (e) => ["visible", "hidden"].includes(e)
    },
    /**
     * The maximum width of the rendered Tweet in whole pixels. This value should be between 250 and 550 pixels.
     * @default "auto"
     */
    width: {
      type: [String, Number],
      default: "auto",
      validator: (e) => typeof e == "string" ? e === "auto" : typeof e == "number" ? e >= 250 && e <= 550 : false
    },
    /**
     * Float the Tweet left, right, or center relative to its container. Typically set to allow text or other content to wrap around the Tweet.
     * @default undefined
     */
    align: {
      type: [String, void 0],
      default: void 0,
      validator: (e) => ["left", "right", "center", void 0].includes(e)
    },
    /**
     * When set to dark, displays Tweet with light text over a dark background.
     * @default "light"
     */
    theme: {
      type: String,
      default: "light",
      validator: (e) => ["light", "dark"].includes(e)
    },
    /**
     * A supported Twitter language code. Loads text components in the specified language. Note: does not affect the text of the cited Tweet.
     * @default "en"
     */
    lang: {
      type: String,
      default: "en",
      validator: (e) => [
        "ar",
        "bn",
        "cs",
        "da",
        "de",
        "el",
        "en",
        "es",
        "fa",
        "fi",
        "fil",
        "fr",
        "he",
        "hi",
        "hu",
        "id",
        "it",
        "ja",
        "ko",
        "msa",
        "nl",
        "no",
        "pl",
        "pt",
        "ro",
        "ru",
        "sv",
        "th",
        "tr",
        "uk",
        "ur",
        "vi",
        "zh-cn",
        "zh-tw"
      ].includes(e)
    },
    /**
     * When set to true, the Tweet and its embedded page on your site are not used for purposes that include personalized suggestions and personalized ads.
     * @default false
     */
    dnt: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    "tweet-load-success": (e) => !!e,
    "tweet-load-error": (e) => e
  },
  setup(e, { emit: p }) {
    const u = e, l = p, o = ref(true), a = ref(false), d = ref();
    onMounted(() => {
      s();
    }), watch(toRef(u), s, {
      deep: true
    });
    function s() {
      if (!(window.twttr && window.twttr.ready)) {
        m("https://platform.twitter.com/widgets.js", s);
        return;
      }
      window.twttr.ready().then(({ widgets: t }) => {
        if (o.value = true, a.value = false, d.value)
          d.value.innerHTML = "";
        else {
          console.error("tweetContainerRef is null");
          return;
        }
        const { tweetId: i, tweetOptions: n } = v();
        t.createTweet(i, d.value, n).then(async (r) => {
          await nextTick(), r ? l("tweet-load-success", r) : (a.value = true, l("tweet-load-error", new Error("Failed to load tweet.")));
        }).finally(() => {
          o.value = false;
        });
      }).catch((t) => {
        console.error("Error loading Twitter widget:", t), a.value = true, o.value = false;
      });
    }
    function v() {
      var _;
      let { tweetId: t, tweetUrl: i, ...n } = u, r = null;
      if (t && i)
        r = new Error("Cannot provide both tweet-id and tweet-url.");
      else if (t)
        /^\d+$/.test(t) || (r = new Error(
          "Invalid tweet-id, please provide a valid numerical tweet-id."
        ));
      else if (i) {
        const g = /^(https?:\/\/)?(www\.)?(twitter|x)\.com\/.*\/status(?:es)?\/(?<tweetId>[^/?]\d+)$/i, c = i.trim().match(g);
        c ? t = (_ = c.groups) == null ? void 0 : _.tweetId : r = new Error("Invalid tweet-url.");
      } else
        r = new Error("Must provide either tweet-id or tweet-url.");
      if (r)
        throw a.value = true, o.value = false, l("tweet-load-error", r), r;
      return {
        tweetId: t,
        tweetOptions: n
      };
    }
    function m(t, i) {
      if (window.___$twitterScriptLoaded___ === void 0 && (window.___$twitterScriptLoaded___ = false), window.___$twitterScriptLoaded___) {
        i();
        return;
      }
      if (window.___$twitterScriptLoading___ === void 0 && (window.___$twitterScriptLoading___ = false), window.___$twitterScriptLoading___) {
        const r = setInterval(() => {
          window.___$twitterScriptLoaded___ && (clearInterval(r), i());
        }, 100);
        return;
      }
      window.___$twitterScriptLoading___ = true;
      const n = document.createElement("script");
      n.setAttribute("src", t), n.async = true, n.addEventListener("load", () => {
        window.___$twitterScriptLoaded___ = true, window.___$twitterScriptLoading___ = false, i();
      }, false), document.body.appendChild(n);
    }
    return (t, i) => (openBlock(), createElementBlock(Fragment, null, [
      a.value ? renderSlot(t.$slots, "error", { key: 0 }) : o.value ? renderSlot(t.$slots, "loading", { key: 1 }) : createCommentVNode("", true),
      createBaseVNode("div", mergeProps({
        ref_key: "tweetContainerRef",
        ref: d
      }, t.$attrs), null, 16)
    ], 64));
  }
});
export {
  B as default
};
//# sourceMappingURL=vue-tweet.js.map
