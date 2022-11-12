<template>
	<section>
		<div class="chat-parent max-w-[31%] h-screen border-r pt-6">
			<div class="chat__header px-6">
				<form>   
					<div class="relative">
						<div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
							<svg aria-hidden="true" class="w-5 h-5 text-[#676F7E] dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
						</div>
						<input id="default-search" type="search"  class="block p-4 pl-10 w-full text-base text-[#676F7E] rounded-lg  focus:border-[#4EC1B6] bg-[#F8F8FA]" placeholder="Search people or messages..." required>
					</div>
				</form>
				<div class="tabs p-2 bg-[#F8F8FA] mt-6 rounded-lg flex mx-auto text-center">
					<ul class="flex flex-wrap text-base font-medium text-center mx-auto text-[#000000]">
						<li class="mr-2">
							<a href="#" class="inline-block py-3 px-4 text-[#4EC1B6] bg-white rounded-lg active" aria-current="page">All (23)</a>
						</li>
						<li class="mr-2">
							<a href="#" class="inline-block py-3 px-4 rounded-lg hover:text-[#4EC1B6] hover:bg-[#fff]">Opened (12)</a>
						</li>
						<li class="">
							<a href="#" class="inline-block py-3 px-4 rounded-lg hover:text-[#4EC1B6] hover:bg-white ">Closed (34)</a>
						</li>
					</ul>
				</div>
				<div class="chat__online mt-4 mb-8">
					<div class="chat__online__header flex justify-between flex-row items-center pb-6">
						<span class="text-2xl font-medium ">Online</span>
						<a class="text-[#4EC1B6] underline text-sm font-medium cursor-pointer">View All</a>
					</div>
					<div class="chat__online__main flex">
						<div class="chat__online__main__wrapper flex flex-col justify-center mr-4">
							<div class="chat__avatar relative block">
								<img :src="icons.chatAvatar" alt="" class=""/>
								<div class="chat__online__status w-[12px] h-[12px] bg-[#39CE25] rounded-full outline outline-2 outline-white absolute top-2 right-0"></div>
							</div>
							<span class="text-base mt-2">Georgere</span>
						</div>
						<div class="chat__online__main__wrapper flex flex-col justify-center mr-4">
							<div class="chat__avatar relative block">
								<img :src="icons.chatAvatar" alt="" class=""/>
								<div class="chat__online__status w-[12px] h-[12px] bg-[#39CE25] rounded-full outline outline-2 outline-white absolute top-2 right-0"></div>
							</div>
							<span class="text-base mt-2">Georgere</span>
						</div>
						<div class="chat__online__main__wrapper flex flex-col justify-center mr-4">
							<div class="chat__avatar relative block">
								<img :src="icons.chatAvatar" alt="" class=""/>
								<div class="chat__online__status w-[12px] h-[12px] bg-[#39CE25] rounded-full outline outline-2 outline-white absolute top-2 right-0"></div>
							</div>
							<span class="text-base mt-2">Georgere</span>
						</div>
						<div class="chat__online__main__wrapper flex flex-col justify-center mr-4">
							<div class="chat__avatar relative block">
								<img :src="icons.chatAvatar" alt="" class=""/>
								<div class="chat__online__status w-[12px] h-[12px] bg-[#39CE25] rounded-full outline outline-2 outline-white absolute top-2 right-0"></div>
							</div>
							<span class="text-base mt-2">Georgere</span>
						</div>
					</div>
				</div>
			</div>
			<div class="chat__list">
					<div class="chat__list__header flex justify-between items-center mb-6 px-6">
						<span class="font-medium text-2xl">Chat</span>
						<a href="#" class="chat__list__edit">
							<img :src="icons.edit" alt="" class=""/>
						</a>
					</div>
					<div class="chat__list flex flex-col">
						<div class="chat flex items-center mb-4 hover:bg-[#F8F8FA] cursor-pointer py-1 px-6">
							<div class="chat__avatar relative block">
								<img :src="icons.avatarSmall" alt="" class=""/>
								<div class="chat__online__status w-[12px] h-[12px] bg-[#39CE25] rounded-full outline outline-2 outline-white absolute top-1 right-0"></div>
							</div>
							<div class="chat__preview pl-3 relative w-full">
								<div class="chat__preview__header flex flex-row justify-between items-center">
									<span class="font-medium text-lg">Roymarthen Ispar</span>
									<span class="text-[#00000099] text-sm">10.43am</span>
								</div>
								<div class="chat__preview__main flex flex-row justify-between">
									<div class="chat__preview__value flex items-center">
										<Icon
											icon="akar-icons:double-check"
											class="text-1xl text-[#2070E8]"
										/>
										<span class="pl-2 text-[#00000099] text-base">Nice Shot bro!</span>
									</div>
									<div class="chat__count bg-[#F15C43] rounded-md w-[20px] h-[20px] flex justify-center items-center">
										<span class="text-white text-xs font-medium text-center">2</span>
									</div>
								</div>
								<div class="chat__label bg-[#FC6F7224] py-[2px] px-[4px] rounded-md inline my-auto absolute right-[10%] top-1/2 transform -translate-x-1/2 -translate-y-1/2">
									<span class="text-[#FC6F72] font-medium text-xs text-center my-auto leading-none">Label Here</span>
								</div>
							</div>
						</div>
						<div class="chat flex items-center mb-4 hover:bg-[#F8F8FA] cursor-pointer py-1 px-6">
							<div class="chat__avatar relative block">
								<img :src="icons.avatarSmall" alt="" class=""/>
								<div class="chat__online__status w-[12px] h-[12px] bg-[#39CE25] rounded-full outline outline-2 outline-white absolute top-1 right-0"></div>
							</div>
							<div class="chat__preview pl-3 relative w-full">
								<div class="chat__preview__header flex flex-row justify-between items-center">
									<span class="font-medium text-lg">Roymarthen Ispar</span>
									<span class="text-[#00000099] text-sm">10.43am</span>
								</div>
								<div class="chat__preview__main flex flex-row justify-between">
									<div class="chat__preview__value flex items-center">
										<Icon
											icon="akar-icons:double-check"
											class="text-1xl text-[#2070E8]"
										/>
										<span class="pl-2 text-[#00000099] text-base">Nice Shot bro!</span>
									</div>
									<div class="chat__count bg-[#F15C43] rounded-md w-[20px] h-[20px] flex justify-center items-center">
										<span class="text-white text-xs font-medium text-center">2</span>
									</div>
								</div>
								<div class="chat__label bg-[#FC6F7224] py-[2px] px-[4px] rounded-md inline my-auto absolute right-[10%] top-1/2 transform -translate-x-1/2 -translate-y-1/2">
									<span class="text-[#FC6F72] font-medium text-xs text-center my-auto leading-none">Label Here</span>
								</div>
							</div>
						</div>
						<div class="chat flex items-center mb-4 hover:bg-[#F8F8FA] cursor-pointer py-1 px-6">
							<div class="chat__avatar relative block">
								<img :src="icons.avatarSmall" alt="" class=""/>
								<div class="chat__online__status w-[12px] h-[12px] bg-[#39CE25] rounded-full outline outline-2 outline-white absolute top-1 right-0"></div>
							</div>
							<div class="chat__preview pl-3 relative w-full">
								<div class="chat__preview__header flex flex-row justify-between items-center">
									<span class="font-medium text-lg">Roymarthen Ispar</span>
									<span class="text-[#00000099] text-sm">10.43am</span>
								</div>
								<div class="chat__preview__main flex flex-row justify-between">
									<div class="chat__preview__value flex items-center">
										<Icon
											icon="akar-icons:double-check"
											class="text-1xl text-[#2070E8]"
										/>
										<span class="pl-2 text-[#00000099] text-base">Nice Shot bro!</span>
									</div>
									<div class="chat__count bg-[#F15C43] rounded-md w-[20px] h-[20px] flex justify-center items-center">
										<span class="text-white text-xs font-medium text-center">2</span>
									</div>
								</div>
								<div class="chat__label bg-[#FC6F7224] py-[2px] px-[4px] rounded-md inline my-auto absolute right-[10%] top-1/2 transform -translate-x-1/2 -translate-y-1/2">
									<span class="text-[#FC6F72] font-medium text-xs text-center my-auto leading-none">Label Here</span>
								</div>
							</div>
						</div>
						<div class="chat flex items-center mb-4 hover:bg-[#F8F8FA] cursor-pointer py-1 px-6">
							<div class="chat__avatar relative block">
								<img :src="icons.avatarSmall" alt="" class=""/>
								<div class="chat__online__status w-[12px] h-[12px] bg-[#39CE25] rounded-full outline outline-2 outline-white absolute top-1 right-0"></div>
							</div>
							<div class="chat__preview pl-3 relative w-full">
								<div class="chat__preview__header flex flex-row justify-between items-center">
									<span class="font-medium text-lg">Roymarthen Ispar</span>
									<span class="text-[#00000099] text-sm">10.43am</span>
								</div>
								<div class="chat__preview__main flex flex-row justify-between">
									<div class="chat__preview__value flex items-center">
										<Icon
											icon="akar-icons:double-check"
											class="text-1xl text-[#2070E8]"
										/>
										<span class="pl-2 text-[#00000099] text-base">Nice Shot bro!</span>
									</div>
									<div class="chat__count bg-[#F15C43] rounded-md w-[20px] h-[20px] flex justify-center items-center">
										<span class="text-white text-xs font-medium text-center">2</span>
									</div>
								</div>
								<div class="chat__label bg-[#FC6F7224] py-[2px] px-[4px] rounded-md inline my-auto absolute right-[10%] top-1/2 transform -translate-x-1/2 -translate-y-1/2">
									<span class="text-[#FC6F72] font-medium text-xs text-center my-auto leading-none">Label Here</span>
								</div>
							</div>
						</div>
					</div>
				</div>
		</div>
	</section>
</template>

<script>
import { Icon } from "@iconify/vue"
import chatAvatar from "../assets/icons/chatAvatar.png?url"
import avatarSmall from "../assets/icons/avatarSmall.png?url"
import edit from "../assets/icons/edit.svg?url"


export default {
	name: "ChatView",
	components: {
		Icon,
	},
	data() {
		return {
			icons: {
				chatAvatar,
				avatarSmall,
				edit
			},
		}
	}
}
</script>