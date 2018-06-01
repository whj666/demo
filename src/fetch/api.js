import path from './path';
import get from './get';
import post from './post';

//测试接口
export function testApi(options, callback) {
	if(!callback){
		return false;
	};

  const result = post((path + '/api'), JSON.stringify(options));
  result.then(res => {
  	return res.json();
  }).then(json => {
  	callback(json);
  }).catch(ex => {
	message.error(ex);
  });
}