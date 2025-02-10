// Mock data structure matching Reddit's JSON API response
const mockRedditData = [
  {
    kind: "Listing",
    data: {
      after: null,
      dist: 1,
      modhash: "3mdgxfkzkbedb6bf779ed00e45ff3c22619fd32e5dc1497e6f",
      geo_filter: "",
      children: [
        {
          kind: "t3",
          data: {
            approved_at_utc: null,
            subreddit: "redditdev",
            selftext:
              "Hi there, I don't know if this is a stupid question but I can't seem to find a clear cut way to access the Reddit REST API (or does Reddit not have one), which I want to use in a basic Reddit clone app built using Flutter. I have googled quite abit but I haven't found any tutorials which help me understand how to get any sort of data from the API using JSON (*there are tutorials for Python and whatn*ot).  \n\n\nBut idk whether I'm missing out on something because I just started researching yesterday and I am at my wit's end. Please, if anyone could give me an easy to understand, step-by-step tutorial on how to even get any data (*especially data for a specific user*) from the Reddit API using JSON that would be very helpful.",
            user_reports: [],
            saved: false,
            mod_reason_title: null,
            gilded: 0,
            clicked: false,
            title: "How to get Reddit API data using JSON?",
            link_flair_richtext: [],
            subreddit_name_prefixed: "r/redditdev",
            hidden: false,
            pwls: 6,
            link_flair_css_class: "",
            downs: 0,
            thumbnail_height: null,
            top_awarded_type: null,
            hide_score: false,
            name: "t3_rvqirc",
            quarantine: false,
            link_flair_text_color: "dark",
            upvote_ratio: 1,
            author_flair_background_color: null,
            subreddit_type: "public",
            ups: 6,
            total_awards_received: 0,
            media_embed: {},
            thumbnail_width: null,
            author_flair_template_id: null,
            is_original_content: false,
            author_fullname: "t2_5d6gf9zw",
            secure_media: null,
            is_reddit_media_domain: false,
            is_meta: false,
            category: null,
            secure_media_embed: {},
            link_flair_text: "Reddit API",
            can_mod_post: false,
            score: 6,
            approved_by: null,
            is_created_from_ads_ui: false,
            author_premium: false,
            thumbnail: "self",
            edited: false,
            author_flair_css_class: null,
            author_flair_richtext: [],
            gildings: {},
            content_categories: null,
            is_self: true,
            mod_note: null,
            created: 1641288919,
            link_flair_type: "text",
            wls: 6,
            removed_by_category: null,
            banned_by: null,
            author_flair_type: "text",
            domain: "self.redditdev",
            allow_live_comments: true,
            selftext_html:
              '&lt;!-- SC_OFF --&gt;&lt;div class="md"&gt;&lt;p&gt;Hi there, I don&amp;#39;t know if this is a stupid question but I can&amp;#39;t seem to find a clear cut way to access the Reddit REST API (or does Reddit not have one), which I want to use in a basic Reddit clone app built using Flutter. I have googled quite abit but I haven&amp;#39;t found any tutorials which help me understand how to get any sort of data from the API using JSON (&lt;em&gt;there are tutorials for Python and whatn&lt;/em&gt;ot).  &lt;/p&gt;\n\n&lt;p&gt;But idk whether I&amp;#39;m missing out on something because I just started researching yesterday and I am at my wit&amp;#39;s end. Please, if anyone could give me an easy to understand, step-by-step tutorial on how to even get any data (&lt;em&gt;especially data for a specific user&lt;/em&gt;) from the Reddit API using JSON that would be very helpful.&lt;/p&gt;\n&lt;/div&gt;&lt;!-- SC_ON --&gt;',
            likes: null,
            suggested_sort: null,
            banned_at_utc: null,
            view_count: null,
            archived: true,
            no_follow: false,
            is_crosspostable: true,
            pinned: false,
            over_18: false,
            all_awardings: [],
            awarders: [],
            media_only: false,
            link_flair_template_id: "c4edd5ce-40e8-11e7-b814-0ef91bd65558",
            can_gild: false,
            spoiler: false,
            locked: false,
            author_flair_text: null,
            treatment_tags: [],
            visited: false,
            removed_by: null,
            num_reports: null,
            distinguished: null,
            subreddit_id: "t5_2qizd",
            author_is_blocked: false,
            mod_reason_by: null,
            removal_reason: null,
            link_flair_background_color: "",
            id: "rvqirc",
            is_robot_indexable: true,
            num_duplicates: 0,
            report_reasons: null,
            author: "Lurker4Memes",
            discussion_type: null,
            num_comments: 10,
            send_replies: true,
            media: null,
            contest_mode: false,
            author_patreon_flair: false,
            author_flair_text_color: null,
            permalink:
              "/r/redditdev/comments/rvqirc/how_to_get_reddit_api_data_using_json/",
            stickied: false,
            url: "https://www.reddit.com/r/redditdev/comments/rvqirc/how_to_get_reddit_api_data_using_json/",
            subreddit_subscribers: 76567,
            created_utc: 1641288919,
            num_crossposts: 0,
            mod_reports: [],
            is_video: false,
          },
        },
      ],
      before: null,
    },
  },
  {
    kind: "Listing",
    data: {
      after: null,
      dist: null,
      modhash: "3mdgxfkzkbedb6bf779ed00e45ff3c22619fd32e5dc1497e6f",
      geo_filter: "",
      children: [
        {
          kind: "t1",
          data: {
            subreddit_id: "t5_2qizd",
            approved_at_utc: null,
            author_is_blocked: false,
            comment_type: null,
            awarders: [],
            mod_reason_by: null,
            banned_by: null,
            author_flair_type: "text",
            total_awards_received: 0,
            subreddit: "redditdev",
            author_flair_template_id: null,
            likes: null,
            replies: {
              kind: "Listing",
              data: {
                after: null,
                dist: null,
                modhash: "3mdgxfkzkbedb6bf779ed00e45ff3c22619fd32e5dc1497e6f",
                geo_filter: "",
                children: [
                  {
                    kind: "t1",
                    data: {
                      subreddit_id: "t5_2qizd",
                      approved_at_utc: null,
                      author_is_blocked: false,
                      comment_type: null,
                      awarders: [],
                      mod_reason_by: null,
                      banned_by: null,
                      author_flair_type: "text",
                      total_awards_received: 0,
                      subreddit: "redditdev",
                      author_flair_template_id: null,
                      likes: null,
                      replies: {
                        kind: "Listing",
                        data: {
                          after: null,
                          dist: null,
                          modhash:
                            "3mdgxfkzkbedb6bf779ed00e45ff3c22619fd32e5dc1497e6f",
                          geo_filter: "",
                          children: [
                            {
                              kind: "t1",
                              data: {
                                subreddit_id: "t5_2qizd",
                                approved_at_utc: null,
                                author_is_blocked: false,
                                comment_type: null,
                                awarders: [],
                                mod_reason_by: null,
                                banned_by: null,
                                author_flair_type: "text",
                                total_awards_received: 0,
                                subreddit: "redditdev",
                                author_flair_template_id: null,
                                likes: null,
                                replies: {
                                  kind: "Listing",
                                  data: {
                                    after: null,
                                    dist: null,
                                    modhash:
                                      "3mdgxfkzkbedb6bf779ed00e45ff3c22619fd32e5dc1497e6f",
                                    geo_filter: "",
                                    children: [
                                      {
                                        kind: "t1",
                                        data: {
                                          subreddit_id: "t5_2qizd",
                                          approved_at_utc: null,
                                          author_is_blocked: false,
                                          comment_type: null,
                                          awarders: [],
                                          mod_reason_by: null,
                                          banned_by: null,
                                          author_flair_type: "text",
                                          total_awards_received: 0,
                                          subreddit: "redditdev",
                                          author_flair_template_id: null,
                                          likes: null,
                                          replies: {
                                            kind: "Listing",
                                            data: {
                                              after: null,
                                              dist: null,
                                              modhash:
                                                "3mdgxfkzkbedb6bf779ed00e45ff3c22619fd32e5dc1497e6f",
                                              geo_filter: "",
                                              children: [
                                                {
                                                  kind: "t1",
                                                  data: {
                                                    subreddit_id: "t5_2qizd",
                                                    approved_at_utc: null,
                                                    author_is_blocked: false,
                                                    comment_type: null,
                                                    awarders: [],
                                                    mod_reason_by: null,
                                                    banned_by: null,
                                                    author_flair_type: "text",
                                                    total_awards_received: 0,
                                                    subreddit: "redditdev",
                                                    author_flair_template_id:
                                                      null,
                                                    distinguished: null,
                                                    likes: null,
                                                    replies: {
                                                      kind: "Listing",
                                                      data: {
                                                        after: null,
                                                        dist: null,
                                                        modhash:
                                                          "3mdgxfkzkbedb6bf779ed00e45ff3c22619fd32e5dc1497e6f",
                                                        geo_filter: "",
                                                        children: [
                                                          {
                                                            kind: "t1",
                                                            data: {
                                                              subreddit_id:
                                                                "t5_2qizd",
                                                              approved_at_utc:
                                                                null,
                                                              author_is_blocked: false,
                                                              comment_type:
                                                                null,
                                                              awarders: [],
                                                              mod_reason_by:
                                                                null,
                                                              banned_by: null,
                                                              author_flair_type:
                                                                "text",
                                                              total_awards_received: 0,
                                                              subreddit:
                                                                "redditdev",
                                                              author_flair_template_id:
                                                                null,
                                                              distinguished:
                                                                null,
                                                              likes: null,
                                                              replies: {
                                                                kind: "Listing",
                                                                data: {
                                                                  after: null,
                                                                  dist: null,
                                                                  modhash:
                                                                    "3mdgxfkzkbedb6bf779ed00e45ff3c22619fd32e5dc1497e6f",
                                                                  geo_filter:
                                                                    "",
                                                                  children: [
                                                                    {
                                                                      kind: "t1",
                                                                      data: {
                                                                        subreddit_id:
                                                                          "t5_2qizd",
                                                                        approved_at_utc:
                                                                          null,
                                                                        author_is_blocked: false,
                                                                        comment_type:
                                                                          null,
                                                                        awarders:
                                                                          [],
                                                                        mod_reason_by:
                                                                          null,
                                                                        banned_by:
                                                                          null,
                                                                        author_flair_type:
                                                                          "text",
                                                                        total_awards_received: 0,
                                                                        subreddit:
                                                                          "redditdev",
                                                                        author_flair_template_id:
                                                                          null,
                                                                        distinguished:
                                                                          null,
                                                                        likes:
                                                                          null,
                                                                        replies:
                                                                          {
                                                                            kind: "Listing",
                                                                            data: {
                                                                              after:
                                                                                null,
                                                                              dist: null,
                                                                              modhash:
                                                                                "3mdgxfkzkbedb6bf779ed00e45ff3c22619fd32e5dc1497e6f",
                                                                              geo_filter:
                                                                                "",
                                                                              children:
                                                                                [
                                                                                  {
                                                                                    kind: "t1",
                                                                                    data: {
                                                                                      subreddit_id:
                                                                                        "t5_2qizd",
                                                                                      approved_at_utc:
                                                                                        null,
                                                                                      author_is_blocked: false,
                                                                                      comment_type:
                                                                                        null,
                                                                                      awarders:
                                                                                        [],
                                                                                      mod_reason_by:
                                                                                        null,
                                                                                      banned_by:
                                                                                        null,
                                                                                      author_flair_type:
                                                                                        "text",
                                                                                      total_awards_received: 0,
                                                                                      subreddit:
                                                                                        "redditdev",
                                                                                      author_flair_template_id:
                                                                                        null,
                                                                                      distinguished:
                                                                                        null,
                                                                                      likes:
                                                                                        null,
                                                                                      replies:
                                                                                        {
                                                                                          kind: "Listing",
                                                                                          data: {
                                                                                            after:
                                                                                              null,
                                                                                            dist: null,
                                                                                            modhash:
                                                                                              "3mdgxfkzkbedb6bf779ed00e45ff3c22619fd32e5dc1497e6f",
                                                                                            geo_filter:
                                                                                              "",
                                                                                            children:
                                                                                              [
                                                                                                {
                                                                                                  kind: "t1",
                                                                                                  data: {
                                                                                                    subreddit_id:
                                                                                                      "t5_2qizd",
                                                                                                    approved_at_utc:
                                                                                                      null,
                                                                                                    author_is_blocked: false,
                                                                                                    comment_type:
                                                                                                      null,
                                                                                                    awarders:
                                                                                                      [],
                                                                                                    mod_reason_by:
                                                                                                      null,
                                                                                                    banned_by:
                                                                                                      null,
                                                                                                    author_flair_type:
                                                                                                      "text",
                                                                                                    total_awards_received: 0,
                                                                                                    subreddit:
                                                                                                      "redditdev",
                                                                                                    author_flair_template_id:
                                                                                                      null,
                                                                                                    likes:
                                                                                                      null,
                                                                                                    replies:
                                                                                                      {
                                                                                                        kind: "Listing",
                                                                                                        data: {
                                                                                                          after:
                                                                                                            null,
                                                                                                          dist: null,
                                                                                                          modhash:
                                                                                                            "3mdgxfkzkbedb6bf779ed00e45ff3c22619fd32e5dc1497e6f",
                                                                                                          geo_filter:
                                                                                                            "",
                                                                                                          children:
                                                                                                            [
                                                                                                              {
                                                                                                                kind: "t1",
                                                                                                                data: {
                                                                                                                  subreddit_id:
                                                                                                                    "t5_2qizd",
                                                                                                                  approved_at_utc:
                                                                                                                    null,
                                                                                                                  author_is_blocked: false,
                                                                                                                  comment_type:
                                                                                                                    null,
                                                                                                                  awarders:
                                                                                                                    [],
                                                                                                                  mod_reason_by:
                                                                                                                    null,
                                                                                                                  banned_by:
                                                                                                                    null,
                                                                                                                  author_flair_type:
                                                                                                                    "text",
                                                                                                                  total_awards_received: 0,
                                                                                                                  subreddit:
                                                                                                                    "redditdev",
                                                                                                                  author_flair_template_id:
                                                                                                                    null,
                                                                                                                  likes:
                                                                                                                    null,
                                                                                                                  replies:
                                                                                                                    "",
                                                                                                                  user_reports:
                                                                                                                    [],
                                                                                                                  saved: false,
                                                                                                                  id: "hr8udyk",
                                                                                                                  banned_at_utc:
                                                                                                                    null,
                                                                                                                  mod_reason_title:
                                                                                                                    null,
                                                                                                                  gilded: 0,
                                                                                                                  archived: true,
                                                                                                                  collapsed_reason_code:
                                                                                                                    null,
                                                                                                                  no_follow: true,
                                                                                                                  author:
                                                                                                                    "Lurker4Memes",
                                                                                                                  can_mod_post: false,
                                                                                                                  created_utc: 1641321630,
                                                                                                                  send_replies: true,
                                                                                                                  parent_id:
                                                                                                                    "t1_hr8tq5t",
                                                                                                                  score: 1,
                                                                                                                  author_fullname:
                                                                                                                    "t2_5d6gf9zw",
                                                                                                                  approved_by:
                                                                                                                    null,
                                                                                                                  mod_note:
                                                                                                                    null,
                                                                                                                  all_awardings:
                                                                                                                    [],
                                                                                                                  collapsed: false,
                                                                                                                  body: "Oh wow, I didn't think that someone would create a pub package for reddit. I thought I had to get the data through a https call then transmit the data into Flutter. Many thanks, I'll try this out!",
                                                                                                                  edited: false,
                                                                                                                  top_awarded_type:
                                                                                                                    null,
                                                                                                                  author_flair_css_class:
                                                                                                                    null,
                                                                                                                  name: "t1_hr8udyk",
                                                                                                                  is_submitter: true,
                                                                                                                  downs: 0,
                                                                                                                  author_flair_richtext:
                                                                                                                    [],
                                                                                                                  author_patreon_flair: false,
                                                                                                                  body_html:
                                                                                                                    '&lt;div class="md"&gt;&lt;p&gt;Oh wow, I didn&amp;#39;t think that someone would create a pub package for reddit. I thought I had to get the data through a https call then transmit the data into Flutter. Many thanks, I&amp;#39;ll try this out!&lt;/p&gt;\n&lt;/div&gt;',
                                                                                                                  removal_reason:
                                                                                                                    null,
                                                                                                                  collapsed_reason:
                                                                                                                    null,
                                                                                                                  distinguished:
                                                                                                                    null,
                                                                                                                  associated_award:
                                                                                                                    null,
                                                                                                                  stickied: false,
                                                                                                                  author_premium: false,
                                                                                                                  can_gild: false,
                                                                                                                  gildings:
                                                                                                                    {},
                                                                                                                  unrepliable_reason:
                                                                                                                    null,
                                                                                                                  author_flair_text_color:
                                                                                                                    null,
                                                                                                                  score_hidden: false,
                                                                                                                  permalink:
                                                                                                                    "/r/redditdev/comments/rvqirc/how_to_get_reddit_api_data_using_json/hr8udyk/",
                                                                                                                  subreddit_type:
                                                                                                                    "public",
                                                                                                                  locked: false,
                                                                                                                  report_reasons:
                                                                                                                    null,
                                                                                                                  created: 1641321630,
                                                                                                                  author_flair_text:
                                                                                                                    null,
                                                                                                                  treatment_tags:
                                                                                                                    [],
                                                                                                                  link_id:
                                                                                                                    "t3_rvqirc",
                                                                                                                  subreddit_name_prefixed:
                                                                                                                    "r/redditdev",
                                                                                                                  controversiality: 0,
                                                                                                                  depth: 9,
                                                                                                                  author_flair_background_color:
                                                                                                                    null,
                                                                                                                  collapsed_because_crowd_control:
                                                                                                                    null,
                                                                                                                  mod_reports:
                                                                                                                    [],
                                                                                                                  num_reports:
                                                                                                                    null,
                                                                                                                  ups: 1,
                                                                                                                },
                                                                                                              },
                                                                                                            ],
                                                                                                          before:
                                                                                                            null,
                                                                                                        },
                                                                                                      },
                                                                                                    user_reports:
                                                                                                      [],
                                                                                                    saved: false,
                                                                                                    id: "hr8tq5t",
                                                                                                    banned_at_utc:
                                                                                                      null,
                                                                                                    mod_reason_title:
                                                                                                      null,
                                                                                                    gilded: 0,
                                                                                                    archived: true,
                                                                                                    collapsed_reason_code:
                                                                                                      null,
                                                                                                    no_follow: true,
                                                                                                    author:
                                                                                                      "kiesoma",
                                                                                                    can_mod_post: false,
                                                                                                    created_utc: 1641321378,
                                                                                                    send_replies: true,
                                                                                                    parent_id:
                                                                                                      "t1_hr8tcnl",
                                                                                                    score: 1,
                                                                                                    author_fullname:
                                                                                                      "t2_amygpekk",
                                                                                                    approved_by:
                                                                                                      null,
                                                                                                    mod_note:
                                                                                                      null,
                                                                                                    all_awardings:
                                                                                                      [],
                                                                                                    body: "Try DRAW. Or [Pub](https://pub.dev/documentation/reddit/latest/)",
                                                                                                    edited: false,
                                                                                                    gildings:
                                                                                                      {},
                                                                                                    downs: 0,
                                                                                                    author_flair_css_class:
                                                                                                      null,
                                                                                                    name: "t1_hr8tq5t",
                                                                                                    is_submitter: false,
                                                                                                    collapsed: false,
                                                                                                    author_flair_richtext:
                                                                                                      [],
                                                                                                    author_patreon_flair: false,
                                                                                                    body_html:
                                                                                                      '&lt;div class="md"&gt;&lt;p&gt;Try DRAW. Or &lt;a href="https://pub.dev/documentation/reddit/latest/"&gt;Pub&lt;/a&gt;&lt;/p&gt;\n&lt;/div&gt;',
                                                                                                    removal_reason:
                                                                                                      null,
                                                                                                    collapsed_reason:
                                                                                                      null,
                                                                                                    distinguished:
                                                                                                      null,
                                                                                                    associated_award:
                                                                                                      null,
                                                                                                    stickied: false,
                                                                                                    author_premium: false,
                                                                                                    can_gild: false,
                                                                                                    top_awarded_type:
                                                                                                      null,
                                                                                                    unrepliable_reason:
                                                                                                      null,
                                                                                                    author_flair_text_color:
                                                                                                      null,
                                                                                                    score_hidden: false,
                                                                                                    permalink:
                                                                                                      "/r/redditdev/comments/rvqirc/how_to_get_reddit_api_data_using_json/hr8tq5t/",
                                                                                                    subreddit_type:
                                                                                                      "public",
                                                                                                    locked: false,
                                                                                                    report_reasons:
                                                                                                      null,
                                                                                                    created: 1641321378,
                                                                                                    author_flair_text:
                                                                                                      null,
                                                                                                    treatment_tags:
                                                                                                      [],
                                                                                                    link_id:
                                                                                                      "t3_rvqirc",
                                                                                                    subreddit_name_prefixed:
                                                                                                      "r/redditdev",
                                                                                                    controversiality: 0,
                                                                                                    depth: 8,
                                                                                                    author_flair_background_color:
                                                                                                      null,
                                                                                                    collapsed_because_crowd_control:
                                                                                                      null,
                                                                                                    mod_reports:
                                                                                                      [],
                                                                                                    num_reports:
                                                                                                      null,
                                                                                                    ups: 1,
                                                                                                  },
                                                                                                },
                                                                                              ],
                                                                                            before:
                                                                                              null,
                                                                                          },
                                                                                        },
                                                                                      user_reports:
                                                                                        [],
                                                                                      saved: false,
                                                                                      id: "hr8tcnl",
                                                                                      banned_at_utc:
                                                                                        null,
                                                                                      mod_reason_title:
                                                                                        null,
                                                                                      gilded: 0,
                                                                                      archived: true,
                                                                                      collapsed_reason_code:
                                                                                        null,
                                                                                      no_follow: true,
                                                                                      author:
                                                                                        "Lurker4Memes",
                                                                                      can_mod_post: false,
                                                                                      created_utc: 1641321235,
                                                                                      send_replies: true,
                                                                                      parent_id:
                                                                                        "t1_hr8sofo",
                                                                                      score: 1,
                                                                                      author_fullname:
                                                                                        "t2_5d6gf9zw",
                                                                                      approved_by:
                                                                                        null,
                                                                                      mod_note:
                                                                                        null,
                                                                                      all_awardings:
                                                                                        [],
                                                                                      body: "Yea, I did but they really didn't specify what I'm supposed to even do with all those endpoints. I tried following some old archived wiki but all I got were 401 and 429 gateway errors. I then tried to just tyoe it into my browser searchbar but they all led to an error page.",
                                                                                      edited: false,
                                                                                      gildings:
                                                                                        {},
                                                                                      author_flair_css_class:
                                                                                        null,
                                                                                      name: "t1_hr8tcnl",
                                                                                      is_submitter: true,
                                                                                      downs: 0,
                                                                                      author_flair_richtext:
                                                                                        [],
                                                                                      author_patreon_flair: false,
                                                                                      body_html:
                                                                                        '&lt;div class="md"&gt;&lt;p&gt;Yea, I did but they really didn&amp;#39;t specify what I&amp;#39;m supposed to even do with all those endpoints. I tried following some old archived wiki but all I got were 401 and 429 gateway errors. I then tried to just tyoe it into my browser searchbar but they all led to an error page.&lt;/p&gt;\n&lt;/div&gt;',
                                                                                      removal_reason:
                                                                                        null,
                                                                                      collapsed_reason:
                                                                                        null,
                                                                                      link_id:
                                                                                        "t3_rvqirc",
                                                                                      associated_award:
                                                                                        null,
                                                                                      stickied: false,
                                                                                      author_premium: false,
                                                                                      can_gild: false,
                                                                                      top_awarded_type:
                                                                                        null,
                                                                                      unrepliable_reason:
                                                                                        null,
                                                                                      author_flair_text_color:
                                                                                        null,
                                                                                      score_hidden: false,
                                                                                      permalink:
                                                                                        "/r/redditdev/comments/rvqirc/how_to_get_reddit_api_data_using_json/hr8tcnl/",
                                                                                      subreddit_type:
                                                                                        "public",
                                                                                      locked: false,
                                                                                      report_reasons:
                                                                                        null,
                                                                                      created: 1641321235,
                                                                                      author_flair_text:
                                                                                        null,
                                                                                      treatment_tags:
                                                                                        [],
                                                                                      collapsed: false,
                                                                                      subreddit_name_prefixed:
                                                                                        "r/redditdev",
                                                                                      controversiality: 0,
                                                                                      depth: 7,
                                                                                      author_flair_background_color:
                                                                                        null,
                                                                                      collapsed_because_crowd_control:
                                                                                        null,
                                                                                      mod_reports:
                                                                                        [],
                                                                                      num_reports:
                                                                                        null,
                                                                                      ups: 1,
                                                                                    },
                                                                                  },
                                                                                ],
                                                                              before:
                                                                                null,
                                                                            },
                                                                          },
                                                                        user_reports:
                                                                          [],
                                                                        saved: false,
                                                                        id: "hr8sofo",
                                                                        banned_at_utc:
                                                                          null,
                                                                        mod_reason_title:
                                                                          null,
                                                                        gilded: 0,
                                                                        archived: true,
                                                                        collapsed_reason_code:
                                                                          null,
                                                                        no_follow: true,
                                                                        author:
                                                                          "kiesoma",
                                                                        can_mod_post: false,
                                                                        send_replies: true,
                                                                        parent_id:
                                                                          "t1_hr8sh98",
                                                                        score: 1,
                                                                        author_fullname:
                                                                          "t2_amygpekk",
                                                                        approved_by:
                                                                          null,
                                                                        mod_note:
                                                                          null,
                                                                        all_awardings:
                                                                          [],
                                                                        collapsed: false,
                                                                        body: "Ah, for that you’ll need to use the Reddit API.\n\n[Have you checked the official documentation out?](https://www.reddit.com/dev/api/)",
                                                                        edited: false,
                                                                        gildings:
                                                                          {},
                                                                        author_flair_css_class:
                                                                          null,
                                                                        name: "t1_hr8sofo",
                                                                        is_submitter: false,
                                                                        downs: 0,
                                                                        author_flair_richtext:
                                                                          [],
                                                                        author_patreon_flair: false,
                                                                        body_html:
                                                                          '&lt;div class="md"&gt;&lt;p&gt;Ah, for that you’ll need to use the Reddit API.&lt;/p&gt;\n\n&lt;p&gt;&lt;a href="https://www.reddit.com/dev/api/"&gt;Have you checked the official documentation out?&lt;/a&gt;&lt;/p&gt;\n&lt;/div&gt;',
                                                                        removal_reason:
                                                                          null,
                                                                        collapsed_reason:
                                                                          null,
                                                                        link_id:
                                                                          "t3_rvqirc",
                                                                        associated_award:
                                                                          null,
                                                                        stickied: false,
                                                                        author_premium: false,
                                                                        can_gild: false,
                                                                        top_awarded_type:
                                                                          null,
                                                                        unrepliable_reason:
                                                                          null,
                                                                        author_flair_text_color:
                                                                          null,
                                                                        score_hidden: false,
                                                                        permalink:
                                                                          "/r/redditdev/comments/rvqirc/how_to_get_reddit_api_data_using_json/hr8sofo/",
                                                                        subreddit_type:
                                                                          "public",
                                                                        locked: false,
                                                                        report_reasons:
                                                                          null,
                                                                        created: 1641320981,
                                                                        author_flair_text:
                                                                          null,
                                                                        treatment_tags:
                                                                          [],
                                                                        created_utc: 1641320981,
                                                                        subreddit_name_prefixed:
                                                                          "r/redditdev",
                                                                        controversiality: 0,
                                                                        depth: 6,
                                                                        author_flair_background_color:
                                                                          null,
                                                                        collapsed_because_crowd_control:
                                                                          null,
                                                                        mod_reports:
                                                                          [],
                                                                        num_reports:
                                                                          null,
                                                                        ups: 1,
                                                                      },
                                                                    },
                                                                  ],
                                                                  before: null,
                                                                },
                                                              },
                                                              user_reports: [],
                                                              saved: false,
                                                              id: "hr8sh98",
                                                              banned_at_utc:
                                                                null,
                                                              mod_reason_title:
                                                                null,
                                                              gilded: 0,
                                                              archived: true,
                                                              collapsed_reason_code:
                                                                null,
                                                              no_follow: true,
                                                              author:
                                                                "Lurker4Memes",
                                                              can_mod_post: false,
                                                              send_replies: true,
                                                              parent_id:
                                                                "t1_hr8ra89",
                                                              score: 1,
                                                              author_fullname:
                                                                "t2_5d6gf9zw",
                                                              approved_by: null,
                                                              mod_note: null,
                                                              all_awardings: [],
                                                              body: "Ah okay, my bad I just typed it manually into my browser and it works, but it only gives me information which is publicly available. \n\nWhat I wanted to know is how do I get all of a users information such as the feed and followed subreddits along with how to code the upvote and comment functions. As my post said, I wanted to make a full sorta reddit clone in Flutter and I'm intending to use JSON to get the data from Reddits API. Sorry for any misunderstandings.",
                                                              edited: false,
                                                              gildings: {},
                                                              downs: 0,
                                                              author_flair_css_class:
                                                                null,
                                                              name: "t1_hr8sh98",
                                                              is_submitter: true,
                                                              collapsed: false,
                                                              author_flair_richtext:
                                                                [],
                                                              author_patreon_flair: false,
                                                              body_html:
                                                                '&lt;div class="md"&gt;&lt;p&gt;Ah okay, my bad I just typed it manually into my browser and it works, but it only gives me information which is publicly available. &lt;/p&gt;\n\n&lt;p&gt;What I wanted to know is how do I get all of a users information such as the feed and followed subreddits along with how to code the upvote and comment functions. As my post said, I wanted to make a full sorta reddit clone in Flutter and I&amp;#39;m intending to use JSON to get the data from Reddits API. Sorry for any misunderstandings.&lt;/p&gt;\n&lt;/div&gt;',
                                                              removal_reason:
                                                                null,
                                                              collapsed_reason:
                                                                null,
                                                              link_id:
                                                                "t3_rvqirc",
                                                              associated_award:
                                                                null,
                                                              stickied: false,
                                                              author_premium: false,
                                                              can_gild: false,
                                                              top_awarded_type:
                                                                null,
                                                              unrepliable_reason:
                                                                null,
                                                              author_flair_text_color:
                                                                null,
                                                              score_hidden: false,
                                                              permalink:
                                                                "/r/redditdev/comments/rvqirc/how_to_get_reddit_api_data_using_json/hr8sh98/",
                                                              subreddit_type:
                                                                "public",
                                                              locked: false,
                                                              report_reasons:
                                                                null,
                                                              created: 1641320906,
                                                              author_flair_text:
                                                                null,
                                                              treatment_tags:
                                                                [],
                                                              created_utc: 1641320906,
                                                              subreddit_name_prefixed:
                                                                "r/redditdev",
                                                              controversiality: 0,
                                                              depth: 5,
                                                              author_flair_background_color:
                                                                null,
                                                              collapsed_because_crowd_control:
                                                                null,
                                                              mod_reports: [],
                                                              num_reports: null,
                                                              ups: 1,
                                                            },
                                                          },
                                                        ],
                                                        before: null,
                                                      },
                                                    },
                                                    user_reports: [],
                                                    saved: false,
                                                    id: "hr8ra89",
                                                    banned_at_utc: null,
                                                    mod_reason_title: null,
                                                    gilded: 0,
                                                    archived: true,
                                                    collapsed_reason_code: null,
                                                    no_follow: true,
                                                    author: "kiesoma",
                                                    can_mod_post: false,
                                                    send_replies: true,
                                                    parent_id: "t1_hr8r3rh",
                                                    score: 1,
                                                    author_fullname:
                                                      "t2_amygpekk",
                                                    removal_reason: null,
                                                    approved_by: null,
                                                    mod_note: null,
                                                    all_awardings: [],
                                                    body: "Yes. Add a .json at the end of subreddits/users and you’ll get most of the information you need. You can use the official Reddit API too, but it’s normally used for stuff like automating comments, posts etc.\n\n[Have a look at what the data looks like.](https://pdfhost.io/v/oeokVkUj5_file)",
                                                    edited: 1641320787,
                                                    author_flair_css_class:
                                                      null,
                                                    name: "t1_hr8ra89",
                                                    is_submitter: false,
                                                    downs: 0,
                                                    author_flair_richtext: [],
                                                    author_patreon_flair: false,
                                                    body_html:
                                                      '&lt;div class="md"&gt;&lt;p&gt;Yes. Add a .json at the end of subreddits/users and you’ll get most of the information you need. You can use the official Reddit API too, but it’s normally used for stuff like automating comments, posts etc.&lt;/p&gt;\n\n&lt;p&gt;&lt;a href="https://pdfhost.io/v/oeokVkUj5_file"&gt;Have a look at what the data looks like.&lt;/a&gt;&lt;/p&gt;\n&lt;/div&gt;',
                                                    gildings: {},
                                                    collapsed_reason: null,
                                                    link_id: "t3_rvqirc",
                                                    associated_award: null,
                                                    stickied: false,
                                                    author_premium: false,
                                                    can_gild: false,
                                                    top_awarded_type: null,
                                                    unrepliable_reason: null,
                                                    author_flair_text_color:
                                                      null,
                                                    treatment_tags: [],
                                                    score_hidden: false,
                                                    permalink:
                                                      "/r/redditdev/comments/rvqirc/how_to_get_reddit_api_data_using_json/hr8ra89/",
                                                    subreddit_type: "public",
                                                    locked: false,
                                                    report_reasons: null,
                                                    created: 1641320447,
                                                    author_flair_text: null,
                                                    collapsed: false,
                                                    created_utc: 1641320447,
                                                    subreddit_name_prefixed:
                                                      "r/redditdev",
                                                    controversiality: 0,
                                                    depth: 4,
                                                    author_flair_background_color:
                                                      null,
                                                    collapsed_because_crowd_control:
                                                      null,
                                                    mod_reports: [],
                                                    num_reports: null,
                                                    ups: 1,
                                                  },
                                                },
                                              ],
                                              before: null,
                                            },
                                          },
                                          user_reports: [],
                                          saved: false,
                                          id: "hr8r3rh",
                                          banned_at_utc: null,
                                          mod_reason_title: null,
                                          gilded: 0,
                                          archived: true,
                                          collapsed_reason_code: null,
                                          no_follow: true,
                                          author: "Lurker4Memes",
                                          can_mod_post: false,
                                          send_replies: true,
                                          parent_id: "t1_hr8atad",
                                          score: 1,
                                          author_fullname: "t2_5d6gf9zw",
                                          removal_reason: null,
                                          approved_by: null,
                                          mod_note: null,
                                          all_awardings: [],
                                          collapsed: false,
                                          body: "Really? Don't you need some sort of auth token to do so? I clicked it and it led me to a blank reddit page. Does this also work for up vote and comment functions?",
                                          edited: false,
                                          top_awarded_type: null,
                                          author_flair_css_class: null,
                                          name: "t1_hr8r3rh",
                                          is_submitter: true,
                                          downs: 0,
                                          author_flair_richtext: [],
                                          author_patreon_flair: false,
                                          body_html:
                                            '&lt;div class="md"&gt;&lt;p&gt;Really? Don&amp;#39;t you need some sort of auth token to do so? I clicked it and it led me to a blank reddit page. Does this also work for up vote and comment functions?&lt;/p&gt;\n&lt;/div&gt;',
                                          gildings: {},
                                          collapsed_reason: null,
                                          distinguished: null,
                                          associated_award: null,
                                          stickied: false,
                                          author_premium: false,
                                          can_gild: false,
                                          link_id: "t3_rvqirc",
                                          unrepliable_reason: null,
                                          author_flair_text_color: null,
                                          score_hidden: false,
                                          permalink:
                                            "/r/redditdev/comments/rvqirc/how_to_get_reddit_api_data_using_json/hr8r3rh/",
                                          subreddit_type: "public",
                                          locked: false,
                                          report_reasons: null,
                                          created: 1641320377,
                                          author_flair_text: null,
                                          treatment_tags: [],
                                          created_utc: 1641320377,
                                          subreddit_name_prefixed:
                                            "r/redditdev",
                                          controversiality: 0,
                                          depth: 3,
                                          author_flair_background_color: null,
                                          collapsed_because_crowd_control: null,
                                          mod_reports: [],
                                          num_reports: null,
                                          ups: 1,
                                        },
                                      },
                                    ],
                                    before: null,
                                  },
                                },
                                user_reports: [],
                                saved: false,
                                id: "hr8atad",
                                banned_at_utc: null,
                                mod_reason_title: null,
                                gilded: 0,
                                archived: true,
                                collapsed_reason_code: null,
                                no_follow: true,
                                author: "kiesoma",
                                can_mod_post: false,
                                send_replies: true,
                                parent_id: "t1_hr8a14n",
                                score: 1,
                                author_fullname: "t2_amygpekk",
                                removal_reason: null,
                                approved_by: null,
                                mod_note: null,
                                all_awardings: [],
                                body: "Did you even try visiting the link? The second link gives me all the data reddit provides about you.",
                                edited: false,
                                top_awarded_type: null,
                                downs: 0,
                                author_flair_css_class: null,
                                name: "t1_hr8atad",
                                is_submitter: false,
                                collapsed: false,
                                author_flair_richtext: [],
                                author_patreon_flair: false,
                                body_html:
                                  '&lt;div class="md"&gt;&lt;p&gt;Did you even try visiting the link? The second link gives me all the data reddit provides about you.&lt;/p&gt;\n&lt;/div&gt;',
                                gildings: {},
                                collapsed_reason: null,
                                distinguished: null,
                                associated_award: null,
                                stickied: false,
                                author_premium: false,
                                can_gild: false,
                                link_id: "t3_rvqirc",
                                unrepliable_reason: null,
                                author_flair_text_color: null,
                                score_hidden: false,
                                permalink:
                                  "/r/redditdev/comments/rvqirc/how_to_get_reddit_api_data_using_json/hr8atad/",
                                subreddit_type: "public",
                                locked: false,
                                report_reasons: null,
                                created: 1641314048,
                                author_flair_text: null,
                                treatment_tags: [],
                                created_utc: 1641314048,
                                subreddit_name_prefixed: "r/redditdev",
                                controversiality: 0,
                                depth: 2,
                                author_flair_background_color: null,
                                collapsed_because_crowd_control: null,
                                mod_reports: [],
                                num_reports: null,
                                ups: 1,
                              },
                            },
                          ],
                          before: null,
                        },
                      },
                      user_reports: [],
                      saved: false,
                      id: "hr8a14n",
                      banned_at_utc: null,
                      mod_reason_title: null,
                      gilded: 0,
                      archived: true,
                      collapsed_reason_code: null,
                      no_follow: true,
                      author: "Lurker4Memes",
                      can_mod_post: false,
                      created_utc: 1641313736,
                      send_replies: true,
                      parent_id: "t1_hr7ygfw",
                      score: -1,
                      author_fullname: "t2_5d6gf9zw",
                      removal_reason: null,
                      approved_by: null,
                      mod_note: null,
                      all_awardings: [],
                      body: "Ermmm, I don't think thats how JSON works. What I mean is how do I get my Reddit feed data in JSON, not putting my username as a json file.",
                      edited: false,
                      top_awarded_type: null,
                      author_flair_css_class: null,
                      name: "t1_hr8a14n",
                      is_submitter: true,
                      downs: 0,
                      author_flair_richtext: [],
                      author_patreon_flair: false,
                      body_html:
                        '&lt;div class="md"&gt;&lt;p&gt;Ermmm, I don&amp;#39;t think thats how JSON works. What I mean is how do I get my Reddit feed data in JSON, not putting my username as a json file.&lt;/p&gt;\n&lt;/div&gt;',
                      gildings: {},
                      collapsed_reason: null,
                      distinguished: null,
                      associated_award: null,
                      stickied: false,
                      author_premium: false,
                      can_gild: false,
                      link_id: "t3_rvqirc",
                      unrepliable_reason: null,
                      author_flair_text_color: null,
                      score_hidden: false,
                      permalink:
                        "/r/redditdev/comments/rvqirc/how_to_get_reddit_api_data_using_json/hr8a14n/",
                      subreddit_type: "public",
                      locked: false,
                      report_reasons: null,
                      created: 1641313736,
                      author_flair_text: null,
                      treatment_tags: [],
                      collapsed: false,
                      subreddit_name_prefixed: "r/redditdev",
                      controversiality: 0,
                      depth: 1,
                      author_flair_background_color: null,
                      collapsed_because_crowd_control: null,
                      mod_reports: [],
                      num_reports: null,
                      ups: -1,
                    },
                  },
                ],
                before: null,
              },
            },
            user_reports: [],
            saved: false,
            id: "hr7ygfw",
            banned_at_utc: null,
            mod_reason_title: null,
            gilded: 0,
            archived: true,
            collapsed_reason_code: null,
            no_follow: true,
            author: "kiesoma",
            can_mod_post: false,
            created_utc: 1641309054,
            send_replies: true,
            parent_id: "t3_rvqirc",
            score: 1,
            author_fullname: "t2_amygpekk",
            approved_by: null,
            mod_note: null,
            all_awardings: [],
            collapsed: false,
            body: "https://www.reddit.com/user/${username}.json\n\n\nSomething like this?\n\n\nExample:\nhttps://www.reddit.com/user/lurker4memes.json",
            edited: false,
            top_awarded_type: null,
            author_flair_css_class: null,
            name: "t1_hr7ygfw",
            is_submitter: false,
            downs: 0,
            author_flair_richtext: [],
            author_patreon_flair: false,
            body_html:
              '&lt;div class="md"&gt;&lt;p&gt;&lt;a href="https://www.reddit.com/user/$%7Busername%7D.json"&gt;https://www.reddit.com/user/${username}.json&lt;/a&gt;&lt;/p&gt;\n\n&lt;p&gt;Something like this?&lt;/p&gt;\n\n&lt;p&gt;Example:\n&lt;a href="https://www.reddit.com/user/lurker4memes.json"&gt;https://www.reddit.com/user/lurker4memes.json&lt;/a&gt;&lt;/p&gt;\n&lt;/div&gt;',
            removal_reason: null,
            collapsed_reason: null,
            distinguished: null,
            associated_award: null,
            stickied: false,
            author_premium: false,
            can_gild: false,
            gildings: {},
            unrepliable_reason: null,
            author_flair_text_color: null,
            score_hidden: false,
            permalink:
              "/r/redditdev/comments/rvqirc/how_to_get_reddit_api_data_using_json/hr7ygfw/",
            subreddit_type: "public",
            locked: false,
            report_reasons: null,
            created: 1641309054,
            author_flair_text: null,
            treatment_tags: [],
            link_id: "t3_rvqirc",
            subreddit_name_prefixed: "r/redditdev",
            controversiality: 0,
            depth: 0,
            author_flair_background_color: null,
            collapsed_because_crowd_control: null,
            mod_reports: [],
            num_reports: null,
            ups: 1,
          },
        },
      ],
      before: null,
    },
  },
];

const mockSentimentData = {
  positive: [
    {
      summary:
        "User successfully accesses JSON data using a modified URL and acknowledges the limitation of public data.",
      id: "hr8sh98",
      author: "Lurker4Memes",
    },
    {
      summary:
        "User provides guidance on using the Reddit API and suggests alternative tools like DRAW and Pub for easier access.",
      id: "hr8sofo",
      author: "kiesoma",
    },
    {
      summary:
        "User appreciates the suggestion of a Reddit package for Flutter, expressing gratitude.",
      id: "hr8udyk",
      author: "Lurker4Memes",
    },
  ],
  neutral: [
    {
      summary:
        "User shares a potential link structure to access Reddit JSON data but does not clarify if it meets the request.",
      id: "hr7ygfw",
      author: "kiesoma",
    },
    {
      summary:
        "User questions if authentication is required to access JSON data and whether upvote and comment functions can be performed.",
      id: "hr8r3rh",
      author: "Lurker4Memes",
    },
    {
      summary:
        "User mentions difficulties understanding the Reddit API documentation and errors encountered when trying to use endpoints.",
      id: "hr8tcnl",
      author: "Lurker4Memes",
    },
  ],
  negative: [
    {
      summary:
        "User dismisses the suggested JSON link, misunderstanding its purpose.",
      id: "hr8a14n",
      author: "Lurker4Memes",
    },
    {
      summary:
        "User responds in a slightly confrontational manner, questioning if the other person even tried using the link.",
      id: "hr8atad",
      author: "kiesoma",
    },
  ],
};
