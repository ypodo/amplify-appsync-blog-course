(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2997],{3709:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/my-posts",function(){return t(1197)}])},1197:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return v}});var r=t(4051),o=t.n(r),s=t(5893),i=t(531),a=t(9382),c=t(3900),u=t(1664),d=t(7294),m=t(9424),p=t(381),l=t.n(p),f=t(949);function x(n,e,t,r,o,s,i){try{var a=n[s](i),c=a.value}catch(u){return void t(u)}a.done?e(c):Promise.resolve(c).then(r,o)}function h(n){return function(){var e=this,t=arguments;return new Promise((function(r,o){var s=n.apply(e,t);function i(n){x(s,r,o,i,a,"next",n)}function a(n){x(s,r,o,i,a,"throw",n)}i(void 0)}))}}function v(){var n=(0,d.useState)([]),e=n[0],t=n[1];function r(){return p.apply(this,arguments)}function p(){return(p=h(o().mark((function n(){var e,r,s,u;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.g.currentAuthenticatedUser();case 2:return e=n.sent.username,n.next=5,a.b.graphql({query:m.zu,variables:{username:e}});case 5:return r=n.sent,s=r.data.postsByUsername.items,n.next=9,Promise.all(s.map(function(){var n=h(o().mark((function n(e){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e.coverImage){n.next=4;break}return n.next=3,c.Ke.get(e.coverImage);case 3:e.coverImage=n.sent;case 4:return n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()));case 9:u=n.sent,t(u);case 11:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(){return(x=h(o().mark((function n(e){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.b.graphql({query:f.fR,variables:{input:{id:e}},authMode:"AMAZON_COGNITO_USER_POOLS"});case 2:r();case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return(0,d.useEffect)((function(){r()}),[]),(0,s.jsx)("div",{children:e.map((function(n,e){return(0,s.jsxs)("div",{className:"py-8 px-8 max-w-xxl mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-1 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 mb-2",children:[n.coverImage&&(0,s.jsx)("img",{className:"w-36 h-36 bg-contain bg-center rounded-full sm:mx-0 sm:shrink-0",src:n.coverImage}),(0,s.jsxs)("div",{className:"text-center space-y-2 sm:text-left",children:[(0,s.jsxs)("div",{className:"space-y-0.5",children:[(0,s.jsx)("p",{className:"text-lg text-black font-semibold",children:n.title}),(0,s.jsxs)("p",{className:"text-slate-500 font-medium",children:["Created on: ",l()(n.createdAt).format("ddd, MMM hh:mm a")]})]}),(0,s.jsxs)("div",{className:"sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-1",children:[(0,s.jsx)("p",{className:"px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2",children:(0,s.jsx)(u.default,{href:"/edit-post/".concat(n.id),children:"Edit Post"})}),(0,s.jsx)("p",{className:"px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2",children:(0,s.jsx)(u.default,{href:"/posts/".concat(n.id),children:"View Post"})}),(0,s.jsx)("button",{className:"text-sm mr-4 text-red-500",onClick:function(){return function(n){return x.apply(this,arguments)}(n.id)},children:"Delete Post"})]})]})]},e)}))})}},949:function(n,e,t){"use strict";t.d(e,{qb:function(){return r},CP:function(){return o},fR:function(){return s},Yr:function(){return i}});var r="\n  mutation CreatePost(\n    $input: CreatePostInput!\n    $condition: ModelPostConditionInput\n  ) {\n    createPost(input: $input, condition: $condition) {\n      id\n      title\n      content\n      username\n      coverImage\n      comments {\n        items {\n          id\n          message\n          postID\n          createdAt\n          updatedAt\n          createdBy\n        }\n        nextToken\n      }\n      createdAt\n      updatedAt\n    }\n  }\n",o="\n  mutation UpdatePost(\n    $input: UpdatePostInput!\n    $condition: ModelPostConditionInput\n  ) {\n    updatePost(input: $input, condition: $condition) {\n      id\n      title\n      content\n      username\n      coverImage\n      comments {\n        items {\n          id\n          message\n          postID\n          createdAt\n          updatedAt\n          createdBy\n        }\n        nextToken\n      }\n      createdAt\n      updatedAt\n    }\n  }\n",s="\n  mutation DeletePost(\n    $input: DeletePostInput!\n    $condition: ModelPostConditionInput\n  ) {\n    deletePost(input: $input, condition: $condition) {\n      id\n      title\n      content\n      username\n      coverImage\n      comments {\n        items {\n          id\n          message\n          postID\n          createdAt\n          updatedAt\n          createdBy\n        }\n        nextToken\n      }\n      createdAt\n      updatedAt\n    }\n  }\n",i="\n  mutation CreateComment(\n    $input: CreateCommentInput!\n    $condition: ModelCommentConditionInput\n  ) {\n    createComment(input: $input, condition: $condition) {\n      id\n      message\n      post {\n        id\n        title\n        content\n        username\n        coverImage\n        comments {\n          nextToken\n        }\n        createdAt\n        updatedAt\n      }\n      postID\n      createdAt\n      updatedAt\n      createdBy\n    }\n  }\n"},9424:function(n,e,t){"use strict";t.d(e,{xl:function(){return r},aA:function(){return o},zu:function(){return s}});var r="\n  query GetPost($id: ID!) {\n    getPost(id: $id) {\n      id\n      title\n      content\n      username\n      coverImage\n      comments {\n        items {\n          id\n          message\n          postID\n          createdAt\n          updatedAt\n          createdBy\n        }\n        nextToken\n      }\n      createdAt\n      updatedAt\n    }\n  }\n",o="\n  query ListPosts(\n    $filter: ModelPostFilterInput\n    $limit: Int\n    $nextToken: String\n  ) {\n    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {\n      items {\n        id\n        title\n        content\n        username\n        coverImage\n        comments {\n          items {\n            id\n            message\n            postID\n            createdAt\n            updatedAt\n            createdBy\n          }\n        }\n        createdAt\n        updatedAt\n      }\n      nextToken\n    }\n  }\n",s="\n  query PostsByUsername(\n    $username: String!\n    $sortDirection: ModelSortDirection\n    $filter: ModelPostFilterInput\n    $limit: Int\n    $nextToken: String\n  ) {\n    postsByUsername(\n      username: $username\n      sortDirection: $sortDirection\n      filter: $filter\n      limit: $limit\n      nextToken: $nextToken\n    ) {\n      items {\n        id\n        title\n        content\n        username\n        coverImage\n        comments {\n          nextToken\n        }\n        createdAt\n        updatedAt\n      }\n      nextToken\n    }\n  }\n"}},function(n){n.O(0,[4885,9382,9774,2888,179],(function(){return e=3709,n(n.s=e);var e}));var e=n.O();_N_E=e}]);