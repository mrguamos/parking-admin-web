<template>
	<h1 class="text-title-page">Collapse / Accordion</h1>

	<article>
		<p class="text-body mt-4">
			The Accordion UI component is a versatile and space-efficient way to organize and display
			content within your digital interface. It is designed to maximize content visibility while
			maintaining a clean and user-friendly layout.
		</p>
		<p class="text-body mt-4">
			This component consists of a series of collapsible panels, each containing a section of
			content. Users can easily expand or collapse these panels with a simple click or tap, allowing
			them to access the information they need without overwhelming the interface. It's a perfect
			solution for displaying FAQs, product details, or any content that benefits from a structured
			and expandable format. You can style the headers, panels, and transitions to match your
			project's overall look and feel. Plus, it's built with accessibility in mind, making it
			user-friendly for all audiences.
		</p>
	</article>

	<h3 class="text-subtitle mt-8">Icon at right</h3>

	<div class="mt-4 p-10 rounded-3xl border border-primary-border">
		<div class="demo-collapse">
			<el-collapse accordion>
				<el-collapse-item name="1">
					<template #title>
						<span class="header-title">Arrow icon at right</span>
						<el-icon class="header-icon custom-arrow">
							<span class="material-icons-outlined">expand_more</span>
						</el-icon>
					</template>
					<div>
						Consistent with real life: in line with the process and logic of real life, and comply
						with languages and habits that the users are used to;
					</div>
					<div>
						Consistent within interface: all elements should be consistent, such as: design style,
						icons and texts, position of elements, etc.
					</div>
				</el-collapse-item>
				<el-collapse-item name="2">
					<template #title>
						<span class="header-title">Arrow icon at right</span>
						<el-icon class="header-icon custom-arrow">
							<span class="material-icons-outlined">expand_more</span>
						</el-icon>
					</template>
					<div>
						Operation feedback: enable the users to clearly perceive their operations by style
						updates and interactive effects;
					</div>
					<div>
						Visual feedback: reflect current state by updating or rearranging elements of the page.
					</div>
				</el-collapse-item>
			</el-collapse>
		</div>
	</div>

	<h2 class="text-subtitle mt-8">Icon at left</h2>

	<div class="mt-4 p-10 rounded-3xl border border-primary-border">
		<div class="demo-collapse">
			<el-collapse accordion>
				<el-collapse-item name="1">
					<template #title>
						<el-icon class="header-icon custom-arrow is-inactive">
							<span class="material-icons-outlined">add</span>
						</el-icon>
						<el-icon class="header-icon custom-arrow is-active">
							<span class="material-icons-outlined">remove</span>
						</el-icon>
						<span class="header-title">Arrow icon at left</span>
					</template>
					<div>
						Consistent with real life: in line with the process and logic of real life, and comply
						with languages and habits that the users are used to;
					</div>
					<div>
						Consistent within interface: all elements should be consistent, such as: design style,
						icons and texts, position of elements, etc.
					</div>
				</el-collapse-item>
				<el-collapse-item name="2">
					<template #title>
						<el-icon class="header-icon custom-arrow is-inactive">
							<span class="material-icons-outlined">add</span>
						</el-icon>
						<el-icon class="header-icon custom-arrow is-active">
							<span class="material-icons-outlined">remove</span>
						</el-icon>
						<span class="header-title">Arrow icon at left</span>
					</template>
					<div>
						Operation feedback: enable the users to clearly perceive their operations by style
						updates and interactive effects;
					</div>
					<div>
						Visual feedback: reflect current state by updating or rearranging elements of the page.
					</div>
				</el-collapse-item>
			</el-collapse>
		</div>
	</div>
</template>
