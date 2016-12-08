import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'filterPostTags'
})
export class FilterPostTags implements PipeTransform {
    transform(tags: any[], postTags: number[]): any[] {
        if(!postTags || !tags)
            return [];
            
        let result: any[] = [];
        postTags.forEach(tagId => {
            tags.forEach(tag => {
                if (tagId == tag.id)
                    result.push(tag)
            })
        });

        return result;
    }

}