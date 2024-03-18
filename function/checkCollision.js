export const checkCollision = (box1, box2) => {
    const left1 = box1.x1;
    const right1 = box1.x2;
    const top1 = box1.y1;
    const bottom1 = box1.y2;

    const left2 = box2.x1;
    const right2 = box2.x2;
    const top2 = box2.y1;
    const bottom2 = box2.y2;

    if (bottom1 < top2 || top1 > bottom2 || right1 < left2 || left1 > right2) {
        return false;
    } else {
        return true;
    }
};
