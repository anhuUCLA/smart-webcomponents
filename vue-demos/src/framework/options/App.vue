<template>
	<div class="vue-root">
		<div class="demo-description">Our grid system uses a series of containers, rows, and columns to layout content. It is built with CSS3 Grid layout and is fully responsive. The columns are defined with "col-sm-4" class for small devices and when the size reaches the breakpoint, the
			columns are stacked.</div>
		<div class="smart-grid-layout">
			<div class="row">
				<div class="col-sm-2">Screen Size</div>
				<div class="col-sm-2">Extra small
					&lt; 576px </div>
						<div class="col-sm-2">Small &gt;= 576px</div>
						<div class="col-sm-2">Medium &gt;= 768px</div>
						<div class="col-sm-2">Large &gt;= 960px</div>
						<div class="col-sm-2">Extra large &gt;= 1200px</div>
				</div>
				<div class="row">
					<div class="col-sm-2">Max width</div>
					<div class="col-sm-2">None(auto)</div>
					<div class="col-sm-2">540px</div>
					<div class="col-sm-2">720px</div>
					<div class="col-sm-2">960px</div>
					<div class="col-sm-2">1140px</div>
				</div>
				<div class="row">
					<div class="col-sm-2">Class prefix</div>
					<div class="col-sm-2">.col-</div>
					<div class="col-sm-2">.col-sm-</div>
					<div class="col-sm-2">.col-md-</div>
					<div class="col-sm-2">.col-lg-</div>
					<div class="col-sm-2">.col-xl-</div>
				</div>
				<div class="row">
					<div class="col-sm-2">Columns</div>
					<div class="col-sm-10">12</div>
				</div>
				<div class="row">
					<div class="col-sm-2">Row Spacing</div>
					<div class="col-sm-10">10px, controlled by --smart-grid-layout-row-gap.</div>
				</div>
				<div class="row">
					<div class="col-sm-2">Columns Spacing</div>
					<div class="col-sm-10">10px, controlled by --smart-grid-layout-col-gap.</div>
				</div>
				<div class="row">
					<div class="col-sm-2">Nestable</div>
					<div class="col-sm-10">Yes</div>
				</div>
				<div class="row">
					<div class="col-sm-2">Column and Row Ordering</div>
					<div class="col-sm-10">Yes</div>
				</div>
				<div class="row">
					<div class="col-sm-2">Row Fill Remaining Space</div>
					<div class="col-sm-10">Yes</div>
				</div>
			</div>
			<br/>The table above is built with our Grid system.
		</div>
</template>

<script>
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.grid.js";


export default {
	name: "app"
};
</script>

<style>
.smart-grid-layout .row div {
	border-right: 1px solid #444;
	border-bottom: 1px solid #444;
	display: flex;
	justify-content: center;
	align-items: center;
}

.smart-grid-layout .row div:first-child {
	border-left: 1px solid #444;
	border-bottom: 1px solid #fff;
	background: #444;
	color: #fff;
}

.smart-grid-layout .row:first-child div {
	border-top: 1px solid #444;
}

.smart-grid-layout {
	height: 700px;
	--smart-grid-layout-row-gap: 0px;
}

@media (max-width: 576px) {
	.smart-grid-layout .row {
		border: none;
	}
	.smart-grid-layout .row div {
		border: none !important;
		border-top: 1px solid #444 !important;
	}
}
</style>
