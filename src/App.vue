<template>
	<div id="app" class="flex xl:container h-screen xl:w-full">
		<!-- Navbar -->
		<div class="xl:w-1/5 border-r border-lighter xl:px-6 py-2 flex flex-col justify-between">
			<div>
				<button class="h-16 w-16 hover:bg-lightblue text-4xl text-blue mb-4 rounded-full">
					<i class="fab fa-twitter"></i>
				</button>
				<div>
					<button v-for="tab in tabs" :key="tab.id" @click="id = tab.id" :class="`focus:outline-none hover:text-blue flex space-x-4 px-4 py-2 hover:bg-lightblue rounded-full mr-auto mb-3 ${ id == tab.id ? 'text-blue':'' }`">
						<i :class="`${ tab.icon } flex justify-center text-3xl text-left`"></i>
						<p class="hidden xl:block text-2xl text-left font-semibold"> {{ tab.title }} </p>
					</button>
				</div>
				<div class="flex w-full justify-center">
					<button class="text-white bg-blue rounded-full font-semibold focus:outline-none w-12 h-12 xl:w-full p-2 hover:bg-darkblue">
						<p class="hidden xl:block">Twitter</p>
						<i class="fas fa-plus xl:hidden"></i>
					</button>
				</div>
			</div>
			<div class="lg:w-full relative">
				<button @click="dropdown=!dropdown" class="flex items-center w-full focus:outline-none hover:bg-lightblue rounded-full p-2">
					<img src="@/assets/profile.jpg" alt="profile" class="object-cover w-10 h-10 rounded-full">
					<div class="ml-4 hidden xl:block">
						<p class="text-sm font-bold">Kiriratanak</p>
						<p class="text-sm text-gray-400">@k.ratanak</p>
					</div>
					<i class="hidden xl:block fas fa-angle-down ml-auto text-lg"></i>
				</button>
				<div v-if="dropdown === true" class="absolute left-0 bottom-0 w-64 rounded-lg shadow-md border-lightest bg-white mb-16">
					<button class="flex items-center w-full focus:outline-none hover:bg-lightest p-3">
						<img src="@/assets/profile.jpg" alt="profile" class="w-10 h-10 rounded-full">
						<div class="ml-4">
							<p class="text-sm font-bold">Kiriratanak</p>
							<p class="text-sm text-gray-500">@k.ratanak</p>
						</div>
						<i class="fas fa-check ml-auto text-blue"></i>
					</button>
					<button class="w-full text-left focus:outline-none hover:bg-lightest border-t border-lighter p-3 text-sm">
						Add an existing account
					</button>
					<button class="w-full text-left focus:outline-none hover:bg-lightest border-t border-lighter p-3 text-sm">
						Logout @k.ratanak
					</button>
				</div>
			</div>
		</div>

		<!-- Tweet section -->
		<div class="w-1/2 h-full overflow-y-scroll">
			<div class="flex px-3 py-4 w-full items-center justify-between border-b border-lighter">
				<h1 class="text-xl font-bold cursor-pointer">Home</h1>
				<i class="fas fa-star text-xl text-blue cursor-pointer"></i>
			</div>
			<div class="flex w-full border-b-8 border-gray-300 py-2">
				<div class="flex-none"><img src="@/assets/profile.jpg" alt="profile" class="w-12 h-12 rounded-full object-cover mx-3 cursor-pointer"></div>
				<form class="w-full relative">
					<textarea placeholder="What's happening?" maxlength="300" rows="1" class="w-full resize-none my-3 overflow-y-auto break-words focus:outline-none text-xl"></textarea>
					<div class="flex items-center">
						<i class="text-lg text-blue mr-4 my-3 fas fa-image cursor-pointer"></i>
						<i class="text-lg text-blue mr-4 my-3 fas fa-film cursor-pointer"></i>
						<i class="text-lg text-blue mr-4 my-3 fas fa-chart-bar cursor-pointer"></i>
						<i class="text-lg text-blue mr-4 my-3 fas fa-smile cursor-pointer"></i>
						<i class="text-lg text-blue mr-4 my-3 fas fa-calendar cursor-pointer"></i>
					</div>
					<button class="absolute rounded-full text-lg text-white font-semibold bg-blue bottom-0 right-0 h-10 px-4 mr-4">Tweet</button>
				</form>
			</div>
			<div v-for="follow in following" :key="follow.handle" class="w-full p-4 flex border-b border-lighter hover:bg-gray-100">
				<div class="flex-none mr-4">
					<img :src="`${follow.src}`" alt="profile" class="rounded-full w-12 h-12 object-cover">
				</div>
				<div class="w-full">
					<div class="flex items-center w-full">
						<p class="font-semibold">{{ follow.name }}</p>
						<p class="text-gray-400 text-sm ml-1">{{ follow.handle }}</p>
						<i class="fas fa-circle text-gray-400 ml-1 w-1 h-1"></i>
						<p class="text-gray-400 text-sm ml-1">{{ follow.time }}</p>
						<i class="fas fa-angle-down text-dark ml-auto"></i>
					</div>
					<p>{{ follow.tweet }}</p>
					<div class="flex items-center w-full justify-between text-sm text-gray-400 mt-3">
						<div class="flex w-full items-center mr-3 hover:text-blue">
							<button class="focus:outline-none rounded-full hover:bg-lightblue py-1 px-2"><i class="fas fa-comment"></i></button>
							<p>{{ follow.comments }}</p>
						</div>
						<div class="flex w-full items-center mr-3 hover:text-green">
							<button class="focus:outline-none rounded-full hover:bg-lightgreen py-1 px-2"><i class="fas fa-retweet"></i></button>
							<p>{{ follow.retweets }}</p>
						</div>
						<div class="flex w-full items-center mr-3 hover:text-red">
							<button class="focus:outline-none rounded-full hover:bg-lightred py-1 px-2"><i class="fas fa-heart"></i></button>
							<p>{{ follow.like }}</p>
						</div>
						<div class="flex w-full items-center mr-3 hover:text-blue">
							<button class="focus:outline-none rounded-full hover:bg-lightblue py-1 px-2"><i class="fas fa-share-square"></i></button>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- trending -->
		<div class="lg:block hidden w-1/3 h-full border-l border-lighter py-2 px-6 overflow-y-scroll relative">
			<div class="flex items-center w-full rounded-full bg-lighter">
				<i class="fas fa-search ml-4 mr-4 text-light"></i>
				<input type="text" class="focus:outline-none rounded-full p-2 bg-lighter" placeholder="Search Twitter">
			</div>
			<div class="w-full rounded-lg bg-lightest mt-4">
				<div class="flex items-center justify-between p-3">
					<p class="text-lg font-bold">Trending for you</p>
					<i class="fas fa-cog text-blue text-lg cursor-pointer"></i>
				</div>
				<button v-for="trend in trends" :key="trend.title" class="focus:outline-none w-full flex justify-between border-t border-lighter hover:bg-lighter p-3">
					<div>
						<p class="text-sm text-light text-left leading-tight">{{ trend.top }}</p>
						<p class="text-left font-bold py-2">{{ trend.title }}</p>
						<p class="text-sm text-light text-left leading-tight">{{ trend.bottom }}</p>
					</div>
					<i class="fas fa-angle-down text-lg text-dark"></i>
				</button>
				<button class="p-4 w-full hover:bg-lighter focus:outline-none text-left text-blue border-t border-lighter">Show more</button>
			</div>

			<!-- who to follow -->
			<div class="w-full rounded-lg bg-lightest mt-4">
				<div class="flex items-center justify-between p-3">
					<p class="text-lg font-bold">Who to follow</p>
				</div>
				<button v-for="friend in friends" :key="friend.handle" class="flex justify-between items-center w-full hover:bg-lighter focus:outline-none p-3 border-t border-lighter">
					<img :src="`${friend.src}`" alt="profile" class="object-cover w-12 h-12 rounded-full ">
					<div class="ml-4">
						<p class="text-sm font-bold">{{ friend.name }}</p>
						<p class="text-sm text-gray-500">{{ friend.handle }}</p>
					</div>
					<button class="ml-auto focus:outline-none hover:bg-gray-200 text-lg font-bold text-blue rounded-full border border-2 border-blue px-3 py-1">Follow</button>
				</button>
				<button class="p-4 w-full text-left text-blue hover:bg-lighter focus:outline-none border-t border-lighter">Show more</button>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'App',
	components: {
	},
	data() {
		return{
			tabs: [
				{icon: 'fas fa-home', title: 'Home', id:'home'},
				{icon: 'fas fa-hashtag', title: 'Explore', id: 'explore'},
				{icon: 'far fa-bell', title: 'Notifications', id: 'notifications'},
				{icon: 'far fa-envelope', title: 'Messages', id: 'messages'},
				{icon: 'far fa-bookmark', title: 'Bookmarks', id: 'bookmarks'},
				{icon: 'fas fa-clipboard-list', title: 'Lists', id: 'lists'},
				{icon: 'far fa-user', title: 'Profile', id: 'profile'},
				{icon: 'fas fa-ellipsis-h', title: 'More', id: 'more'}
			],
			id: 'home',
			dropdown: false,
			trends: [
				{top: 'Trending in TX', title: 'Gigi', bottom: 'Trending with: Rip Gigi'},
				{top: 'Music', title: 'We Won', bottom: '135K Tweets'},
				{top: 'Pop', title: 'Blue Ivy', bottom: '40k tweets'},
				{top: 'Trending in US', title: 'Denim Day', bottom: '40k tweets'},
				{top: 'Trending', title: 'When Beyonce', bottom: '25.4k tweets'},
			],
			friends: [
				{src: require('./assets/elon.jpg'), name: 'Elon Musk', handle: '@teslaBoy'},
				{src: require('./assets/monk.jpg'), name: 'Adrian Monk', handle: '@detective:)'},
				{src: require('./assets/kevin.jpg'), name: 'Kevin Hart', handle: '@miniRock'}
			],
			following: [
				{src: require('./assets/elon.jpg'), name: 'Elon Musk', handle: '@teslaBoy', time: '20 min', tweet: 'Should I just quarantine on mars??', comments: '1k', retweets: '550', like: '10.3k'},
				{src: require('./assets/kevin.jpg'), name: 'Kevin Hart', handle: '@miniRock', time: '55 min', tweet: 'Should me and the rock do another sub-par movie together????', comments: '2k', retweets: '50', like: '20k'},
				{src: require('./assets/elon.jpg'), name: 'Elon Musk', handle: '@teslaBoy', time: '1.4 hr', tweet: 'Haha just made a flame thrower. Shld I sell them?', comments: '2k', retweets: '100k', like: '500k'},
				{src: require('./assets/elon.jpg'), name: 'Elon Musk', handle: '@teslaBoy', time: '1.4 hr', tweet: 'Just did something crazyyyyyyy', comments: '10', retweets: '32', like: '126'}
			],
		}
	}
}
</script>
