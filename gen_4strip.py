#!/usr/bin/env python3
# Regenerate 4-strip template frames at the ORIGINAL (tall) strip size
# matching the classic 4-strip canvas: 360 x 1020, slots 300x225 @ x=30, y=50/279/508/737
import os
from PIL import Image, ImageDraw, ImageFont

W, H = 360, 1020
SLOT_X, SLOT_W = 30, 300
SLOT_H = 225
SLOT_Y = [50, 279, 508, 737]
BORDER = 8

FONT_BOLD = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"
FONT_REG  = "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"

def font_bold(size): return ImageFont.truetype(FONT_BOLD, size)
def font_reg(size):  return ImageFont.truetype(FONT_REG, size)

THEMES = {
    "valentine-pink":     ("#ff4d6d", "\u2665 BE MINE \u2665",  "\u2665"),
    "valentine-rose":     ("#c9184a", "\u2665 BE MINE \u2665",  "\u2665"),
    "birthday-colorful":  ("#ff6b6b", "\u2605 HAPPY BDAY \u2605",  "\u2605"),
    "birthday-gold":      ("#e0a800", "\u2605 HAPPY BDAY \u2605",  "\u2605"),
    "christmas-red":      ("#c41e3a", "\u2726 MERRY XMAS \u2726",  "\u2726"),
    "christmas-green":    ("#2d6a4f", "\u2726 MERRY XMAS \u2726",  "\u2726"),
    "halloween-orange":   ("#ff6d00", "\u2726 TRICK OR TREAT \u2726", "\u2726"),
    "halloween-purple":   ("#7b2d8e", "\u2726 TRICK OR TREAT \u2726", "\u2726"),
    "newyear-gold":       ("#d4a017", "\u2726 HAPPY NEW YEAR \u2726",  "\u2726"),
    "newyear-silver":     ("#8899aa", "\u2726 HAPPY NEW YEAR \u2726",  "\u2726"),
    "wedding-white":      ("#b9b9b9", "\u2665 FOREVER LOVE \u2665", "\u2665"),
    "wedding-gold":       ("#c9a96e", "\u2665 FOREVER LOVE \u2665", "\u2665"),
    "summer-blue":        ("#06d6a0", "\u2726 SUMMER VIBES \u2726",  "\u2726"),
    "summer-sunset":      ("#ff9f1c", "\u2726 SUMMER VIBES \u2726",  "\u2726"),
    "grad-navy":          ("#1d3557", "\u2605 CLASS OF 2026 \u2605", "\u2605"),
    "grad-gold":          ("#b8860b", "\u2605 CLASS OF 2026 \u2605", "\u2605"),
    "baby-pink":          ("#f8ad9d", "\u2665 WELCOME BABY \u2665", "\u2665"),
    "baby-blue":          ("#90c8e0", "\u2665 WELCOME BABY \u2665", "\u2665"),
    "travel-passport":    ("#2b2d42", "\u2726 TRAVEL DIARY \u2726", "\u2726"),
    "retro-neon":         ("#e400ff", "\u2605 RETRO VIBES \u2605",  "\u2605"),
}

OUT = "public/frames"

def mix(hexcolor, white_ratio):
    hexcolor = hexcolor.lstrip("#")
    r, g, b = int(hexcolor[0:2],16), int(hexcolor[2:4],16), int(hexcolor[4:6],16)
    r = int(r + (255-r)*white_ratio)
    g = int(g + (255-g)*white_ratio)
    b = int(b + (255-b)*white_ratio)
    return (r,g,b)

for name,(color, title, sym) in THEMES.items():
    img = Image.new("RGB", (W, H), color)
    d = ImageDraw.Draw(img)
    # inner light background (leave BORDER px theme border)
    light = mix(color, 0.93)
    d.rectangle([BORDER, BORDER, W-BORDER, H-BORDER], fill=light)

    # thin inner accent line
    d.rectangle([BORDER+4, BORDER+4, W-BORDER-4, H-BORDER-4], outline=mix(color, 0.5), width=1)

    # title
    tfont = font_bold(19)
    # measure
    bbox = d.textbbox((0,0), title, font=tfont)
    tw = bbox[2]-bbox[0]
    tx = (W - tw)//2
    d.text((tx, 18), title, fill=color, font=tfont)

    # side symbols flanking title
    sfont = font_reg(16)
    d.text((BORDER+14, 19), sym, fill=color, font=sfont)
    d.text((W-BORDER-14-14, 19), sym, fill=color, font=sfont)

    # photo slots
    for sy in SLOT_Y:
        # dark slot
        d.rectangle([SLOT_X, sy, SLOT_X+SLOT_W, sy+SLOT_H], fill="#141414")
        # theme-colored slot border (2px around)
        d.rectangle([SLOT_X-2, sy-2, SLOT_X+SLOT_W+2, sy+SLOT_H+2], outline=color, width=2)

    # bottom decorative band
    sfont2 = font_reg(14)
    for i in range(3):
        d.text((150 + i*26, 972), sym, fill=color, font=sfont2)

    path = os.path.join(OUT, name + "_4strip.png")
    img.save(path)
    print("saved", path)

print("done")
