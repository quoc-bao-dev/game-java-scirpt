export const StarScreen = () => `
<div class='p-8 bg-yellow-500 border-round-3xl'>
<div class="intro bg-white border-round-xl start-screen p-6 shadow-8">
                    <h1 class="text-center font-display">JS Game</h1>
                    <div class="flex justify-content-center mt-6">
                        <input type="text"
                            class="px-3 py-2 border-2 border-gray-300 outline-none border-round w-6 font-semibold text-xl"
                            value="Player" placeholder="Nick Name" id='user-name-input'>
                    </div>
                    <div class="flex justify-content-center mt-4">
                        <div class="btn" id="btn-start">Start</div>
                    </div>
                </div>
</div>
`;
