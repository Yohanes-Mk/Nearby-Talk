import { AxiosError } from "axios";

const STORAGE_KEY = "nearby-talk-demo-state-v2";

export const DEMO_ACCOUNTS = [
  {
    id: "demo-maya",
    email: "maya@nearbytalk.demo",
    city: "Addis Ababa",
    university: "Addis Ababa University",
    has_university_access: true,
  },
  {
    id: "demo-dawit",
    email: "dawit@nearbytalk.demo",
    city: "Addis Ababa",
    university: "Addis Ababa University",
    has_university_access: true,
  },
  {
    id: "demo-lena",
    email: "lena@nearbytalk.demo",
    city: "Bahir Dar",
    university: "Bahir Dar University",
    has_university_access: true,
  },
  {
    id: "demo-sam",
    email: "sam@nearbytalk.demo",
    city: "Addis Ababa",
    university: null,
    has_university_access: false,
  },
];

const account = (demoAccount) => ({
  ...demoAccount,
  password: "demo",
  is_verified: true,
  karma: 12,
  created_at: "2026-01-15T10:00:00+00:00",
});

const seedState = () => ({
  accounts: DEMO_ACCOUNTS.map(account),
  posts: [
    {
      id: "demo-post-1",
      content: "The light rail was unusually peaceful this morning. Addis, are we okay?",
      feed_type: "city",
      city: "Addis Ababa",
      university: null,
      upvotes: 24,
      downvotes: 2,
      comment_count: 2,
      created_at: "2026-09-27T08:30:00+00:00",
    },
    {
      id: "demo-post-2",
      content: "Does anyone have a quiet place to study near the 6 Kilo campus?",
      feed_type: "university",
      city: "Addis Ababa",
      university: "Addis Ababa University",
      upvotes: 18,
      downvotes: 1,
      comment_count: 1,
      created_at: "2026-09-27T07:12:00+00:00",
    },
    {
      id: "demo-post-3",
      content: "The weekend market by the lake is worth the early start.",
      feed_type: "city",
      city: "Bahir Dar",
      university: null,
      upvotes: 11,
      downvotes: 0,
      comment_count: 1,
      created_at: "2026-09-26T16:45:00+00:00",
    },
    {
      id: "demo-post-4",
      content: "Reminder: the design club is meeting in the old library at 5pm.",
      feed_type: "university",
      city: "Bahir Dar",
      university: "Bahir Dar University",
      upvotes: 9,
      downvotes: 0,
      comment_count: 0,
      created_at: "2026-09-26T13:20:00+00:00",
    },
    {
      id: "demo-post-5",
      content: "The rain finally cleared up around Bole. Any good low-key dinner spots tonight?",
      feed_type: "city",
      city: "Addis Ababa",
      university: null,
      upvotes: 37,
      downvotes: 3,
      comment_count: 3,
      created_at: "2026-09-28T16:10:00+00:00",
    },
    {
      id: "demo-post-6",
      content: "The reading room is open late this week. Please keep the second floor quiet for exam season.",
      feed_type: "university",
      city: "Addis Ababa",
      university: "Addis Ababa University",
      upvotes: 29,
      downvotes: 1,
      comment_count: 2,
      created_at: "2026-09-28T14:25:00+00:00",
    },
    {
      id: "demo-post-7",
      content: "The blue-and-white minibus route is moving faster than usual today. Screenshot this before it changes.",
      feed_type: "city",
      city: "Addis Ababa",
      university: null,
      upvotes: 16,
      downvotes: 0,
      comment_count: 2,
      created_at: "2026-09-28T12:40:00+00:00",
    },
    {
      id: "demo-post-8",
      content: "Lake-side sunset walk at 6:30? A few of us are bringing tea and a speaker.",
      feed_type: "city",
      city: "Bahir Dar",
      university: null,
      upvotes: 26,
      downvotes: 1,
      comment_count: 2,
      created_at: "2026-09-28T15:05:00+00:00",
    },
    {
      id: "demo-post-9",
      content: "Has anyone found a reliable print shop near campus that can bind a project today?",
      feed_type: "university",
      city: "Bahir Dar",
      university: "Bahir Dar University",
      upvotes: 14,
      downvotes: 0,
      comment_count: 2,
      created_at: "2026-09-28T11:15:00+00:00",
    },
    {
      id: "demo-post-10",
      content: "Small win: the neighborhood clean-up wrapped up before noon. Thanks to everyone who showed up.",
      feed_type: "city",
      city: "Bahir Dar",
      university: null,
      upvotes: 21,
      downvotes: 0,
      comment_count: 1,
      created_at: "2026-09-27T11:45:00+00:00",
    },
  ],
  comments: [
    {
      id: "demo-comment-1",
      post_id: "demo-post-1",
      content: "I noticed that too. It was almost suspiciously calm.",
      upvotes: 6,
      downvotes: 0,
      created_at: "2026-09-27T09:05:00+00:00",
    },
    {
      id: "demo-comment-2",
      post_id: "demo-post-1",
      content: "Enjoy it while it lasts.",
      upvotes: 3,
      downvotes: 0,
      created_at: "2026-09-27T09:18:00+00:00",
    },
    {
      id: "demo-comment-3",
      post_id: "demo-post-2",
      content: "Try the second floor of the science library after lunch.",
      upvotes: 8,
      downvotes: 0,
      created_at: "2026-09-27T08:00:00+00:00",
    },
    {
      id: "demo-comment-4",
      post_id: "demo-post-3",
      content: "The coffee stand on the corner is excellent too.",
      upvotes: 4,
      downvotes: 0,
      created_at: "2026-09-26T17:30:00+00:00",
    },
    {
      id: "demo-comment-5",
      post_id: "demo-post-5",
      content: "The little courtyard place behind the bookstore is relaxed and has great shiro.",
      upvotes: 12,
      downvotes: 0,
      created_at: "2026-09-28T16:24:00+00:00",
    },
    {
      id: "demo-comment-6",
      post_id: "demo-post-5",
      content: "Seconding this. It gets busy after 7, though.",
      upvotes: 7,
      downvotes: 0,
      created_at: "2026-09-28T16:36:00+00:00",
    },
    {
      id: "demo-comment-7",
      post_id: "demo-post-5",
      content: "I know exactly the spot. Meet there?",
      upvotes: 4,
      downvotes: 0,
      created_at: "2026-09-28T16:43:00+00:00",
    },
    {
      id: "demo-comment-8",
      post_id: "demo-post-6",
      content: "Thank you for the reminder. The quiet floor has been a lifesaver.",
      upvotes: 9,
      downvotes: 0,
      created_at: "2026-09-28T14:44:00+00:00",
    },
    {
      id: "demo-comment-9",
      post_id: "demo-post-6",
      content: "Does this include Saturday evening?",
      upvotes: 3,
      downvotes: 0,
      created_at: "2026-09-28T15:02:00+00:00",
    },
    {
      id: "demo-comment-10",
      post_id: "demo-post-7",
      content: "Saving this. My usual route has been completely stuck since morning.",
      upvotes: 5,
      downvotes: 0,
      created_at: "2026-09-28T12:55:00+00:00",
    },
    {
      id: "demo-comment-11",
      post_id: "demo-post-7",
      content: "It was fast for me too. Maybe the universe is apologizing.",
      upvotes: 8,
      downvotes: 0,
      created_at: "2026-09-28T13:06:00+00:00",
    },
    {
      id: "demo-comment-12",
      post_id: "demo-post-8",
      content: "I can bring extra cups. Count me in.",
      upvotes: 10,
      downvotes: 0,
      created_at: "2026-09-28T15:20:00+00:00",
    },
    {
      id: "demo-comment-13",
      post_id: "demo-post-8",
      content: "Perfect timing for the breeze off the lake.",
      upvotes: 6,
      downvotes: 0,
      created_at: "2026-09-28T15:42:00+00:00",
    },
    {
      id: "demo-comment-14",
      post_id: "demo-post-9",
      content: "Try the shop beside the north gate. They turned mine around in an hour.",
      upvotes: 11,
      downvotes: 0,
      created_at: "2026-09-28T11:31:00+00:00",
    },
    {
      id: "demo-comment-15",
      post_id: "demo-post-9",
      content: "North gate confirmed. Bring your own USB drive.",
      upvotes: 5,
      downvotes: 0,
      created_at: "2026-09-28T11:48:00+00:00",
    },
    {
      id: "demo-comment-16",
      post_id: "demo-post-10",
      content: "That was a beautiful thing to wake up and see. Thank you all.",
      upvotes: 13,
      downvotes: 0,
      created_at: "2026-09-27T12:10:00+00:00",
    },
  ],
  votes: {},
});

const loadState = () => {
  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  }

  const state = seedState();
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  return state;
};

const saveState = (state) => {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
};

const currentAccount = (state) => {
  const token = window.localStorage.getItem("token") || "";
  const id = token.replace("demo-token:", "");
  return state.accounts.find((item) => item.id === id);
};

const requireAccount = (state, config) => {
  const user = currentAccount(state);
  if (!user) {
    throw new AxiosError("Authentication required", "401", config, null, {
      status: 401,
      data: { detail: "Authentication required" },
    });
  }
  return user;
};

const timeAgo = (date) => {
  const hours = Math.max(1, Math.round((Date.now() - new Date(date).getTime()) / 3600000));
  return hours < 24 ? `${hours}h ago` : `${Math.round(hours / 24)}d ago`;
};

const withVote = (item, state, userId, type) => ({
  ...item,
  user_vote: state.votes[`${type}:${item.id}:${userId}`] || null,
  time_ago: timeAgo(item.created_at),
});

const response = (data, config) => ({
  data,
  status: 200,
  statusText: "OK",
  headers: {},
  config,
});

const routeError = (status, detail, config) => {
  throw new AxiosError(detail, String(status), config, null, { status, data: { detail } });
};

export const createDemoAdapter = () => async (config) => {
  const state = loadState();
  const method = (config.method || "get").toLowerCase();
  const url = (config.url || "").replace(/^https?:\/\/[^/]+/, "");
  const [path, queryString] = url.split("?");
  const query = new URLSearchParams(queryString || "");
  const body = typeof config.data === "string" ? JSON.parse(config.data) : config.data || {};

  if (method === "post" && path === "/auth/login") {
    const user = state.accounts.find((item) => item.email === body.email);
    if (!user || body.password !== "demo") routeError(401, "Use the demo password: demo", config);
    return response({ token: `demo-token:${user.id}`, user }, config);
  }

  if (method === "post" && path === "/auth/register") {
    const user = account({
      id: `demo-${Date.now()}`,
      email: body.email,
      city: body.city,
      university: null,
      has_university_access: false,
    });
    state.accounts.push(user);
    saveState(state);
    return response({ verification_code: "123456", message: "Demo code: 123456" }, config);
  }

  if (method === "post" && path === "/auth/verify") {
    const user = state.accounts.find((item) => item.email === body.email);
    if (!user || body.code !== "123456") routeError(400, "Use verification code 123456", config);
    return response({ token: `demo-token:${user.id}`, user }, config);
  }

  if (method === "get" && path === "/auth/me") {
    return response(requireAccount(state, config), config);
  }

  const user = requireAccount(state, config);
  const postMatch = path.match(/^\/posts\/([^/]+)$/);
  const commentsMatch = path.match(/^\/posts\/([^/]+)\/comments$/);
  const postVoteMatch = path.match(/^\/posts\/([^/]+)\/vote$/);
  const commentVoteMatch = path.match(/^\/comments\/([^/]+)\/vote$/);

  if (method === "get" && path === "/posts") {
    const feedType = query.get("feed_type") || "city";
    if (feedType === "university" && !user.has_university_access) routeError(403, "University feed access requires an .edu email", config);
    const posts = state.posts
      .filter((post) => post.feed_type === feedType && (feedType === "city" ? post.city === user.city : post.university === user.university))
      .sort((a, b) => query.get("sort") === "hot" ? (b.upvotes - b.downvotes) - (a.upvotes - a.downvotes) : new Date(b.created_at) - new Date(a.created_at))
      .map((post) => withVote(post, state, user.id, "post"));
    return response(posts, config);
  }

  if (method === "post" && path === "/posts") {
    const post = {
      id: `demo-post-${Date.now()}`,
      content: body.content,
      feed_type: body.feed_type,
      city: user.city,
      university: body.feed_type === "university" ? user.university : null,
      upvotes: 0,
      downvotes: 0,
      comment_count: 0,
      created_at: new Date().toISOString(),
    };
    state.posts.unshift(post);
    saveState(state);
    return response(withVote(post, state, user.id, "post"), config);
  }

  if (method === "get" && postMatch) {
    const post = state.posts.find((item) => item.id === postMatch[1]);
    if (!post) routeError(404, "Post not found", config);
    return response(withVote(post, state, user.id, "post"), config);
  }

  if (method === "get" && commentsMatch) {
    const comments = state.comments.filter((item) => item.post_id === commentsMatch[1]).map((comment) => withVote(comment, state, user.id, "comment"));
    return response(comments, config);
  }

  if (method === "post" && commentsMatch) {
    const comment = {
      id: `demo-comment-${Date.now()}`,
      post_id: commentsMatch[1],
      content: body.content,
      upvotes: 0,
      downvotes: 0,
      created_at: new Date().toISOString(),
    };
    state.comments.push(comment);
    const post = state.posts.find((item) => item.id === commentsMatch[1]);
    if (post) post.comment_count += 1;
    saveState(state);
    return response(withVote(comment, state, user.id, "comment"), config);
  }

  if (method === "post" && (postVoteMatch || commentVoteMatch)) {
    const type = postVoteMatch ? "post" : "comment";
    const id = (postVoteMatch || commentVoteMatch)[1];
    const item = type === "post" ? state.posts.find((entry) => entry.id === id) : state.comments.find((entry) => entry.id === id);
    if (!item) routeError(404, "Item not found", config);
    const voteKey = `${type}:${id}:${user.id}`;
    const oldVote = state.votes[voteKey] || 0;
    const newVote = Number(body.vote) || 0;
    if (oldVote === 1) item.upvotes -= 1;
    if (oldVote === -1) item.downvotes -= 1;
    if (newVote === 1) item.upvotes += 1;
    if (newVote === -1) item.downvotes += 1;
    if (newVote) state.votes[voteKey] = newVote;
    else delete state.votes[voteKey];
    saveState(state);
    return response({ upvotes: item.upvotes, downvotes: item.downvotes, user_vote: newVote || null }, config);
  }

  routeError(404, "Demo route not found", config);
};
