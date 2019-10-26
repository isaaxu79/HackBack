import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed-match',
  templateUrl: './feed-match.page.html',
  styleUrls: ['./feed-match.page.scss'],
})
export class FeedMatchPage implements OnInit {

  ruta = "https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/5c3871215bafe83b078adbe3/perro.jpg"

  // items debe llenarse con lo del api
  items =[{
    src:this.ruta,
    text:'testing testing testing testing testing testing sjasnd kjas hasjkdh kshdfksdb dsuhfksdj nskhfskd hsjfkl sjas hash asdkafdsjk bdsjkfbdjsk bdsjkfdsjkfdkjsb skjdbs jk'
  },
  {
    src:this.ruta,
    text:'testing testing testing testing testing testing sjasnd kjas hasjkdh kshdfksdb dsuhfksdj nskhfskd hsjfkl sjas hash asdkafdsjk bdsjkfbdjsk bdsjkfdsjkfdkjsb skjdbs jk'
  },
  {
    src:this.ruta,
    text:'testing testing testing testing testing testing sjasnd kjas hasjkdh kshdfksdb dsuhfksdj nskhfskd hsjfkl sjas hash asdkafdsjk bdsjkfbdjsk bdsjkfdsjkfdkjsb skjdbs jk'
  },
  {
    src:this.ruta,
    text:'testing testing testing testing testing testing sjasnd kjas hasjkdh kshdfksdb dsuhfksdj nskhfskd hsjfkl sjas hash asdkafdsjk bdsjkfbdjsk bdsjkfdsjkfdkjsb skjdbs jk'
  }
]
  constructor() { }

  ngOnInit() {
  }

}
