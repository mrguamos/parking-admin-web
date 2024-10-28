import { session } from '@services/session.service';
import { DirectiveBinding } from 'vue';

//use <p v-permission="'add'">add</p>
const userPermissions = session.getPermissionList();

const permissionDirective = {
	mounted(el: HTMLElement, binding: DirectiveBinding) {
		const { value } = binding;
		if (value && typeof value === 'string') {
			if (!userPermissions.includes(value)) {
				el.parentNode?.removeChild(el);
			}
		}
	},
};

export default permissionDirective;
