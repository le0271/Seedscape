"use strict";
load_sequence.push(
	function () {
		objects.set("board", {
			click: function (click_x, click_y) {

			},
			hover: function (hover_x, hover_y) {
				if (0.25 < hover_x && hover_x < 0.75 && 0.05 < hover_y && hover_y < 0.55) {
					var box_size = 0.50 / this.tile_grid_size; // In fraction
					this.tile_hover = [Math.floor((hover_x - 0.25) / box_size), Math.floor((hover_y - 0.05) / box_size)]
				} else {
					this.tile_hover = null;
				}
			},
			load: function () { },
			name: "board",
			render: function () {
				var box_size = 0.50 / this.tile_grid_size; // In fraction
				var box_size_modified = box_size * 0.90;
				for (var i = 0; i < this.tile_grid_size; i++) {
					for (var j = 0; j < this.tile_grid_size; j++) {
						context.fillStyle = COLORS.grey._50;
						var top_left = [(0.25 + j * box_size) * width, (0.05 + i * box_size) * width];
						var top_left_modified = [top_left[0] + box_size * 0.05 * width, top_left[1] + box_size * 0.05 * width];
						context.fillRect(top_left_modified[0], top_left_modified[1], box_size_modified * width, box_size_modified * width);
						items.get("corn").render(top_left_modified[0], top_left_modified[1], box_size_modified * width, 1);
					}
				}
				if (this.tile_hover != null) {
					context.fillStyle = COLORS.grey._50;
					var top_left = [(0.25 + this.tile_hover[0] * box_size) * width, (0.05 + this.tile_hover[1] * box_size) * width];
					context.fillRect(top_left[0], top_left[1], box_size * width, box_size * width);
					items.get("corn").render((0.25 + this.tile_hover[0] * box_size) * width, (0.05 + this.tile_hover[1] * box_size) * width, box_size * width, 1);
				}

			},
			tick: function () { },
			tile_grid_size: 2,
			tile_grid_size_increment: function () {
				if (this.tile_grid_size != 20) {
					this.tile_grid_size++;
					for (var i = 1; i < this.tile_grid_size; i++) {
						this.tiles.splice(this.tile_grid_size * i - 1, 0, null);
					}
					for (var i = 0; i < this.tile_grid_size; i++) {
						this.tiles.push(null);
					}
					this.tile_hover = null;
				}
			},
			tile_hover: null,
			tiles: [null, null, null, null],
		});
	}
);