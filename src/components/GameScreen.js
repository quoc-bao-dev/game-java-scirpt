export const GameScreen = () => `
<div class="border-game-screen shadow-3 ">

<div class="game-screen absolute z-3 relative overflow-hidden" id="screen">
    <div class=" overflow-hidden absolute top-0 left-0 right-0 bottom-0" id="slider"></div>
    <div class="flex gap-2 group-right">
        <div class=" socer-show py-2 px-3 border-round text-white font-bold w-fit" id="score">999</div>
        <div class="flex gap-1 align-items-center" id="hearts"></div>
    </div>
    <div class="group-left">
        <div class="btn btn-sm" id="btn-pause">
            <i class="fa-solid fa-pause"></i>
        </div>
    </div>
</div>
</div>
    `;
