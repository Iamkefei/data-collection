// base64转十六进制
const base64toHEX = function(base64) {
  let raw = atob(base64);

  let HEX = '';

  for (let i = 0; i < raw.length; i++ ) {

    let _hex = raw.charCodeAt(i).toString(16)

    HEX += (_hex.length==2?_hex:'0'+_hex) + ' ';

  }
  return HEX.replace(/(^\s*)|(\s*$)/g, "");
}
// 十六进制转base64
const hexToBase64 = function(sha1){
  var digits="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  var base64_rep = "";
  var bit_arr = 0;
  var bit_num = 0;
  let ascv = 0;
  for(var n = 0; n < sha1.length; ++n)
  {
    if(sha1[n] >= 'A' && sha1[n] <= 'Z')
    {
      ascv = sha1.charCodeAt(n) - 55;
    }
    else if(sha1[n] >= 'a' && sha1[n] <= 'z')
    {
      ascv = sha1.charCodeAt(n) - 87;
    }
    else
    {
      ascv = sha1.charCodeAt(n) - 48;
    }

    bit_arr = (bit_arr << 4) | ascv;
    bit_num += 4;
    if(bit_num >= 6)
    {
      bit_num -= 6;

      base64_rep += digits[bit_arr >>> bit_num];
      bit_arr &= ~(-1 << bit_num);
    }
  }

  if(bit_num > 0)
  {
    bit_arr <<= 6 - bit_num;
    base64_rep += digits[bit_arr];
  }
  var padding = base64_rep.length % 4;

  if(padding > 0)
  {
    for(var n = 0; n < 4 - padding; ++n)
    {
      base64_rep += "=";
    }
  }
  return base64_rep;
}
export default {
  base64toHEX,
  hexToBase64,
}